/**
 * Utilitaires pour la gestion des tableaux de bord et des rôles
 */

/**
 * Obtient le libellé du rôle en français
 */
export const getRoleLabel = (role: string) => {
  const roleMap: Record<string, string> = {
    'TENANT': 'Locataire',
    'LANDLORD': 'Bailleur',
    'JUDICIAL_OFFICER': 'Commissaire de justice',
    'MEDIATOR': 'Médiateur',
    'SOCIAL_WORKER': 'Services sociaux',
    'PREFECTURE': 'Préfecture',
    'CCAPEX': 'CCAPEX',
    'ADMIN': 'Administrateur'
  };
  return roleMap[role] || role;
};

/**
 * Obtient le chemin du tableau de bord en fonction du rôle
 */
export const getDashboardPath = (role: string) => {
  const pathMap: Record<string, string> = {
    'TENANT': '/dashboard/tenant',
    'LANDLORD': '/dashboard/landlord',
    'JUDICIAL_OFFICER': '/dashboard/judicial',
    'MEDIATOR': '/dashboard/mediator',
    'SOCIAL_WORKER': '/dashboard/social',
    'PREFECTURE': '/dashboard/prefecture',
    'CCAPEX': '/dashboard/ccapex',
    'ADMIN': '/dashboard/admin'
  };
  return pathMap[role] || `/dashboard/${role.toLowerCase()}`;
};
