# Script pour remplacer fr-card__title par alexi-card-title pour les balises h2
# Ce script recherche tous les fichiers .tsx dans le répertoire src et ses sous-répertoires
# et remplace les occurrences de h2 className="fr-card__title" par h2 className="alexi-card-title"

$rootDir = "src"
$filePattern = "*.tsx"

# Fonction pour remplacer les occurrences dans un fichier
function Replace-CardTitles {
    param (
        [string]$filePath
    )
    
    $content = Get-Content -Path $filePath -Raw
    
    # Remplacer h2 className="fr-card__title" par h2 className="alexi-card-title"
    $newContent = $content -replace '(<h2\s+className=")fr-card__title(")', '$1alexi-card-title$2'
    
    # Remplacer h2 className="fr-card_title" (avec un seul underscore) par h2 className="alexi-card-title"
    $newContent = $newContent -replace '(<h2\s+className=")fr-card_title(")', '$1alexi-card-title$2'
    
    # Remplacer h2 className="" (vide) par h2 className="alexi-card-title"
    $newContent = $newContent -replace '(<h2\s+className=")(")', '$1alexi-card-title$2'
    
    # Écrire le contenu modifié dans le fichier si des modifications ont été apportées
    if ($content -ne $newContent) {
        Set-Content -Path $filePath -Value $newContent
        Write-Host "Modifications appliquées dans $filePath"
    }
}

# Rechercher tous les fichiers .tsx dans le répertoire src et ses sous-répertoires
$files = Get-ChildItem -Path $rootDir -Filter $filePattern -Recurse

# Appliquer les remplacements pour chaque fichier
foreach ($file in $files) {
    Replace-CardTitles -filePath $file.FullName
}

Write-Host "Remplacement terminé. $($files.Count) fichiers traités."
