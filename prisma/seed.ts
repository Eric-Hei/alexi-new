import {
  PrismaClient,
  Role,
  CaseStatus,
  ProcedureStage,
  UrgencyLevel,
  DocumentType,
  MediationStatus,
  MeetingStatus,
  EventType,
  AidType,
  AidStatus,
  RepaymentPlanStatus,
  PaymentFrequency,
  InstallmentStatus,
  NotificationType,
  NotificationPriority
} from '../src/generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

// Fonction pour générer une référence de dossier au format ALEXI-YYYY-XXXXX
function generateCaseReference(): string {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(10000 + Math.random() * 90000); // Nombre à 5 chiffres
  return `ALEXI-${year}-${randomNum}`;
}

// Fonction pour générer une date aléatoire dans une plage
function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Fonction pour choisir un élément aléatoire dans un tableau
function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

async function main() {
  console.log('Starting to seed the database...');

  // Suppression des données existantes
  await prisma.ccapexMeetingCase.deleteMany({});
  await prisma.ccapexMeeting.deleteMany({});
  await prisma.caseStatistic.deleteMany({});
  await prisma.comment.deleteMany({});
  await prisma.message.deleteMany({});
  await prisma.installment.deleteMany({});
  await prisma.repaymentPlan.deleteMany({});
  await prisma.document.deleteMany({});
  await prisma.aid.deleteMany({});
  await prisma.caseEvent.deleteMany({});
  await prisma.mediationMeeting.deleteMany({});
  await prisma.mediationRequest.deleteMany({});
  await prisma.notification.deleteMany({});
  await prisma.case.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('Deleted existing data');

  // Création des comptes locataires
  const tenants = [
    {
      email: 'jean.dupont@test.com',
      password: await hashPassword('Locataire123!'),
      firstName: 'Jean',
      lastName: 'Dupont',
      role: Role.TENANT,
      phone: '06 12 34 56 78',
      address: '12 rue des Lilas, 75020 Paris',
      situation: 'Impayé de loyer, assignation en cours',
      isActive: true,
      familyStatus: 'Marié',
      dependents: 2,
      monthlyIncome: 2100.50,
    },
    {
      email: 'marie.martin@test.com',
      password: await hashPassword('Locataire123!'),
      firstName: 'Marie',
      lastName: 'Martin',
      role: Role.TENANT,
      phone: '06 23 45 67 89',
      address: '45 avenue Victor Hugo, 75016 Paris',
      situation: 'Premier impayé, début de procédure',
      isActive: true,
      familyStatus: 'Célibataire',
      dependents: 0,
      monthlyIncome: 1850.00,
    },
    {
      email: 'thomas.bernard@test.com',
      password: await hashPassword('Locataire123!'),
      firstName: 'Thomas',
      lastName: 'Bernard',
      role: Role.TENANT,
      phone: '06 34 56 78 90',
      address: '25 rue Lepic, 75018 Paris',
      situation: 'Plan d\'apurement en cours',
      isActive: true,
      familyStatus: 'Divorcé',
      dependents: 1,
      monthlyIncome: 1950.75,
    },
    {
      email: 'sophie.petit@test.com',
      password: await hashPassword('Locataire123!'),
      firstName: 'Sophie',
      lastName: 'Petit',
      role: Role.TENANT,
      phone: '06 45 67 89 01',
      address: '8 rue du Commerce, 75015 Paris',
      situation: 'Médiation en cours',
      isActive: true,
      familyStatus: 'Pacsée',
      dependents: 0,
      monthlyIncome: 2300.00,
    },
    {
      email: 'lucas.moreau@test.com',
      password: await hashPassword('Locataire123!'),
      firstName: 'Lucas',
      lastName: 'Moreau',
      role: Role.TENANT,
      phone: '06 56 78 90 12',
      address: '32 boulevard Magenta, 75010 Paris',
      situation: 'Commandement de quitter les lieux',
      isActive: true,
      familyStatus: 'Marié',
      dependents: 3,
      monthlyIncome: 1750.25,
    },
  ];

  for (const tenant of tenants) {
    await prisma.user.create({
      data: tenant,
    });
  }
  console.log(`Created ${tenants.length} tenant accounts`);

  // Création des comptes bailleurs
  const landlords = [
    {
      email: 'sci.leslilas@test.com',
      password: await hashPassword('Bailleur123!'),
      firstName: '',
      lastName: 'SCI Les Lilas',
      role: Role.LANDLORD,
      phone: '01 23 45 67 89',
      address: '24 avenue des Fleurs, 75020 Paris',
      type: 'Privé',
      properties: 12,
      isActive: true,
      siret: '12345678901234',
    },
    {
      email: 'pierre.durand@test.com',
      password: await hashPassword('Bailleur123!'),
      firstName: 'Pierre',
      lastName: 'Durand',
      role: Role.LANDLORD,
      phone: '06 67 89 01 23',
      address: '18 rue de la Paix, 75002 Paris',
      type: 'Privé individuel',
      properties: 3,
      isActive: true,
    },
    {
      email: 'ophlm.paris@test.com',
      password: await hashPassword('Bailleur123!'),
      firstName: '',
      lastName: 'OPHLM Paris',
      role: Role.LANDLORD,
      phone: '01 34 56 78 90',
      address: '21 boulevard des Bailleurs, 75013 Paris',
      type: 'Social',
      properties: 5000,
      isActive: true,
      siret: '98765432109876',
    },
    {
      email: 'sci.montmartre@test.com',
      password: await hashPassword('Bailleur123!'),
      firstName: '',
      lastName: 'SCI Montmartre',
      role: Role.LANDLORD,
      phone: '01 45 67 89 01',
      address: '15 rue des Abbesses, 75018 Paris',
      type: 'Privé',
      properties: 25,
      isActive: true,
      siret: '45678901234567',
    },
    {
      email: 'emma.leroy@test.com',
      password: await hashPassword('Bailleur123!'),
      firstName: 'Emma',
      lastName: 'Leroy',
      role: Role.LANDLORD,
      phone: '06 78 90 12 34',
      address: '9 rue du Faubourg Saint-Honoré, 75008 Paris',
      type: 'Privé individuel',
      properties: 1,
      isActive: true,
    },
  ];

  for (const landlord of landlords) {
    await prisma.user.create({
      data: landlord,
    });
  }
  console.log(`Created ${landlords.length} landlord accounts`);

  // Création des comptes commissaires de justice
  const judicialOfficers = [
    {
      email: 'me.dubois@test.com',
      password: await hashPassword('Justice123!'),
      firstName: 'Michel',
      lastName: 'Dubois',
      role: Role.JUDICIAL_OFFICER,
      phone: '01 56 78 90 12',
      address: '5 rue de la Justice, 75001 Paris',
      office: 'SCP Dubois & Associés',
      isActive: true,
      licenseNumber: 'CJ-75-001',
    },
    {
      email: 'me.martin@test.com',
      password: await hashPassword('Justice123!'),
      firstName: 'Claire',
      lastName: 'Martin',
      role: Role.JUDICIAL_OFFICER,
      phone: '01 67 89 01 23',
      address: '12 avenue des Commissaires, 75016 Paris',
      office: 'SCP Martin-Legrand',
      isActive: true,
      licenseNumber: 'CJ-75-002',
    },
    {
      email: 'me.leroy@test.com',
      password: await hashPassword('Justice123!'),
      firstName: 'Philippe',
      lastName: 'Leroy',
      role: Role.JUDICIAL_OFFICER,
      phone: '01 78 90 12 34',
      address: '8 boulevard Haussmann, 75009 Paris',
      office: 'Étude Leroy',
      isActive: true,
      licenseNumber: 'CJ-75-003',
    },
    {
      email: 'me.dupont@test.com',
      password: await hashPassword('Justice123!'),
      firstName: 'Sylvie',
      lastName: 'Dupont',
      role: Role.JUDICIAL_OFFICER,
      phone: '01 89 01 23 45',
      address: '15 rue du Tribunal, 75004 Paris',
      office: 'SCP Dupont-Moreau',
      isActive: true,
      licenseNumber: 'CJ-75-004',
    },
    {
      email: 'me.lambert@test.com',
      password: await hashPassword('Justice123!'),
      firstName: 'Thomas',
      lastName: 'Lambert',
      role: Role.JUDICIAL_OFFICER,
      phone: '01 90 12 34 56',
      address: '22 rue de la Procédure, 75007 Paris',
      office: 'Étude Lambert',
      isActive: true,
      licenseNumber: 'CJ-75-005',
    },
  ];

  for (const officer of judicialOfficers) {
    await prisma.user.create({
      data: officer,
    });
  }
  console.log(`Created ${judicialOfficers.length} judicial officer accounts`);

  // Création des comptes médiateurs
  const mediators = [
    {
      email: 'emilie.dubois@test.com',
      password: await hashPassword('Mediateur123!'),
      firstName: 'Émilie',
      lastName: 'Dubois',
      role: Role.MEDIATOR,
      phone: '06 89 01 23 45',
      address: '7 rue de la Médiation, 75005 Paris',
      organization: 'Association Médiation Logement',
      isActive: true,
      certifications: 'Médiation professionnelle, DEMF',
    },
    {
      email: 'marc.dupont@test.com',
      password: await hashPassword('Mediateur123!'),
      firstName: 'Marc',
      lastName: 'Dupont',
      role: Role.MEDIATOR,
      phone: '06 90 12 34 56',
      address: '14 avenue de la Conciliation, 75014 Paris',
      organization: 'Centre de Médiation de Paris',
      isActive: true,
      certifications: 'Médiation civile et commerciale',
    },
    {
      email: 'sophie.martin@test.com',
      password: await hashPassword('Mediateur123!'),
      firstName: 'Sophie',
      lastName: 'Martin',
      role: Role.MEDIATOR,
      phone: '06 01 23 45 67',
      address: '9 boulevard des Médiateurs, 75011 Paris',
      organization: 'ADIL 75',
      isActive: true,
      certifications: 'Juriste spécialisée en droit du logement',
    },
    {
      email: 'thomas.petit@test.com',
      password: await hashPassword('Mediateur123!'),
      firstName: 'Thomas',
      lastName: 'Petit',
      role: Role.MEDIATOR,
      phone: '06 12 34 56 78',
      address: '18 rue de l\'Accord, 75019 Paris',
      organization: 'Médiation Habitat',
      isActive: true,
      certifications: 'Médiateur agréé',
    },
    {
      email: 'julie.moreau@test.com',
      password: await hashPassword('Mediateur123!'),
      firstName: 'Julie',
      lastName: 'Moreau',
      role: Role.MEDIATOR,
      phone: '06 23 45 67 89',
      address: '5 rue des Conciliateurs, 75003 Paris',
      organization: 'Association Médiation Logement',
      isActive: true,
      certifications: 'Médiation sociale, DEMF',
    },
  ];

  for (const mediator of mediators) {
    await prisma.user.create({
      data: mediator,
    });
  }
  console.log(`Created ${mediators.length} mediator accounts`);

  // Création des comptes services sociaux
  const socialWorkers = [
    {
      email: 'travailleur.social1@test.com',
      password: await hashPassword('Social123!'),
      firstName: 'Marie',
      lastName: 'Dubois',
      role: Role.SOCIAL_WORKER,
      phone: '01 23 45 67 89',
      address: '12 rue de l\'Action Sociale, 75020 Paris',
      service: 'CCAS Paris 20e',
      isActive: true,
      socialDepartment: 'Paris Est',
    },
    {
      email: 'travailleur.social2@test.com',
      password: await hashPassword('Social123!'),
      firstName: 'Paul',
      lastName: 'Martin',
      role: Role.SOCIAL_WORKER,
      phone: '01 34 56 78 90',
      address: '8 avenue de la Solidarité, 75018 Paris',
      service: 'CCAS Paris 18e',
      isActive: true,
      socialDepartment: 'Paris Nord',
    },
    {
      email: 'travailleur.social3@test.com',
      password: await hashPassword('Social123!'),
      firstName: 'Lucie',
      lastName: 'Bernard',
      role: Role.SOCIAL_WORKER,
      phone: '01 45 67 89 01',
      address: '15 boulevard de l\'Aide, 75015 Paris',
      service: 'CCAS Paris 15e',
      isActive: true,
      socialDepartment: 'Paris Sud',
    },
    {
      email: 'travailleur.social4@test.com',
      password: await hashPassword('Social123!'),
      firstName: 'Antoine',
      lastName: 'Petit',
      role: Role.SOCIAL_WORKER,
      phone: '01 56 78 90 12',
      address: '22 rue de l\'Accompagnement, 75013 Paris',
      service: 'CCAS Paris 13e',
      isActive: true,
      socialDepartment: 'Paris Sud',
    },
    {
      email: 'travailleur.social5@test.com',
      password: await hashPassword('Social123!'),
      firstName: 'Camille',
      lastName: 'Leroy',
      role: Role.SOCIAL_WORKER,
      phone: '01 67 89 01 23',
      address: '9 avenue du Soutien, 75019 Paris',
      service: 'CCAS Paris 19e',
      isActive: true,
      socialDepartment: 'Paris Nord-Est',
    },
  ];

  for (const worker of socialWorkers) {
    await prisma.user.create({
      data: worker,
    });
  }
  console.log(`Created ${socialWorkers.length} social worker accounts`);

  // Création des comptes préfecture
  const prefectureUsers = [
    {
      email: 'prefecture.paris1@test.com',
      password: await hashPassword('Prefecture123!'),
      firstName: 'François',
      lastName: 'Moreau',
      role: Role.PREFECTURE,
      phone: '01 78 90 12 34',
      address: '29 rue de la Préfecture, 75004 Paris',
      function: 'Chef de service prévention des expulsions',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
    {
      email: 'prefecture.paris2@test.com',
      password: await hashPassword('Prefecture123!'),
      firstName: 'Hélène',
      lastName: 'Dubois',
      role: Role.PREFECTURE,
      phone: '01 89 01 23 45',
      address: '29 rue de la Préfecture, 75004 Paris',
      function: 'Adjointe au chef de service',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
    {
      email: 'prefecture.paris3@test.com',
      password: await hashPassword('Prefecture123!'),
      firstName: 'Philippe',
      lastName: 'Martin',
      role: Role.PREFECTURE,
      phone: '01 90 12 34 56',
      address: '29 rue de la Préfecture, 75004 Paris',
      function: 'Chargé de mission',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
    {
      email: 'prefecture.paris4@test.com',
      password: await hashPassword('Prefecture123!'),
      firstName: 'Sophie',
      lastName: 'Bernard',
      role: Role.PREFECTURE,
      phone: '01 01 23 45 67',
      address: '29 rue de la Préfecture, 75004 Paris',
      function: 'Chargée de mission',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
    {
      email: 'prefecture.paris5@test.com',
      password: await hashPassword('Prefecture123!'),
      firstName: 'Laurent',
      lastName: 'Petit',
      role: Role.PREFECTURE,
      phone: '01 12 34 56 78',
      address: '29 rue de la Préfecture, 75004 Paris',
      function: 'Agent administratif',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
  ];

  for (const prefectureUser of prefectureUsers) {
    await prisma.user.create({
      data: prefectureUser,
    });
  }
  console.log(`Created ${prefectureUsers.length} prefecture accounts`);

  // Création des comptes CCAPEX
  const ccapexUsers = [
    {
      email: 'ccapex.paris1@test.com',
      password: await hashPassword('Ccapex123!'),
      firstName: 'Isabelle',
      lastName: 'Dupont',
      role: Role.CCAPEX,
      phone: '01 23 45 67 89',
      address: '15 rue de la Commission, 75001 Paris',
      function: 'Présidente CCAPEX Paris',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
    {
      email: 'ccapex.paris2@test.com',
      password: await hashPassword('Ccapex123!'),
      firstName: 'Jacques',
      lastName: 'Martin',
      role: Role.CCAPEX,
      phone: '01 34 56 78 90',
      address: '15 rue de la Commission, 75001 Paris',
      function: 'Secrétaire CCAPEX Paris',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
    {
      email: 'ccapex.paris3@test.com',
      password: await hashPassword('Ccapex123!'),
      firstName: 'Nathalie',
      lastName: 'Leroy',
      role: Role.CCAPEX,
      phone: '01 45 67 89 01',
      address: '15 rue de la Commission, 75001 Paris',
      function: 'Membre permanent - Département',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
    {
      email: 'ccapex.paris4@test.com',
      password: await hashPassword('Ccapex123!'),
      firstName: 'Michel',
      lastName: 'Bernard',
      role: Role.CCAPEX,
      phone: '01 56 78 90 12',
      address: '15 rue de la Commission, 75001 Paris',
      function: 'Membre permanent - CAF',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
    {
      email: 'ccapex.paris5@test.com',
      password: await hashPassword('Ccapex123!'),
      firstName: 'Christine',
      lastName: 'Moreau',
      role: Role.CCAPEX,
      phone: '01 67 89 01 23',
      address: '15 rue de la Commission, 75001 Paris',
      function: 'Membre permanent - ADIL',
      isActive: true,
      prefectureDepartment: 'Paris',
    },
  ];

  for (const ccapexUser of ccapexUsers) {
    await prisma.user.create({
      data: ccapexUser,
    });
  }
  console.log(`Created ${ccapexUsers.length} CCAPEX accounts`);

  // Création du compte administrateur
  await prisma.user.create({
    data: {
      email: 'admin@alexi.gouv.fr',
      password: await hashPassword('Admin123!'),
      firstName: 'Système',
      lastName: 'Admin',
      role: Role.ADMIN,
      phone: '01 00 00 00 00',
      address: 'ALEXI Système',
      isActive: true,
    },
  });
  console.log('Created admin account');

  // Création des dossiers
  console.log('Creating cases...');
  const cases = [];

  // Création de 10 dossiers avec différents statuts et étapes
  for (let i = 0; i < 10; i++) {
    // Sélection aléatoire d'un locataire et d'un bailleur
    const tenant = await prisma.user.findFirst({
      where: { role: Role.TENANT },
      skip: Math.floor(Math.random() * tenants.length),
      take: 1,
    });

    const landlord = await prisma.user.findFirst({
      where: { role: Role.LANDLORD },
      skip: Math.floor(Math.random() * landlords.length),
      take: 1,
    });

    if (!tenant || !landlord) continue;

    // Génération des données du dossier
    const caseData = {
      reference: generateCaseReference(),
      status: randomChoice(Object.values(CaseStatus)),
      stage: randomChoice(Object.values(ProcedureStage)),
      urgency: randomChoice(Object.values(UrgencyLevel)),
      debtAmount: Math.floor(Math.random() * 10000) + 500, // Entre 500 et 10500 €
      description: `Dossier d'impayés de loyer pour ${tenant.firstName} ${tenant.lastName}`,
      reportDate: randomDate(new Date(2023, 0, 1), new Date()),
      lastActionDate: randomDate(new Date(2023, 6, 1), new Date()),
      nextDeadline: randomDate(new Date(), new Date(2025, 11, 31)),
      landlordId: landlord.id,
      tenantId: tenant.id,
      housingType: randomChoice(['T1', 'T2', 'T3', 'T4', 'Studio']),
      housingArea: Math.floor(Math.random() * 100) + 20, // Entre 20 et 120 m²
      rent: Math.floor(Math.random() * 1000) + 400, // Entre 400 et 1400 €
      charges: Math.floor(Math.random() * 200) + 50, // Entre 50 et 250 €
      deposit: Math.floor(Math.random() * 2000) + 500, // Entre 500 et 2500 €
      leaseStartDate: randomDate(new Date(2018, 0, 1), new Date(2023, 0, 1)),
      leaseType: randomChoice(['Vide', 'Meublé', 'HLM', 'Bail mobilité']),
      leaseDuration: randomChoice([12, 36, 48]), // Durée en mois
      address: tenant.address,
      city: tenant.address ? tenant.address.split(',')[1]?.trim().split(' ')[1] || 'Paris' : 'Paris',
      zipCode: tenant.address ? tenant.address.split(',')[1]?.trim().split(' ')[0] || '75000' : '75000',
      department: '75',
      housingBenefit: Math.random() > 0.5,
      benefitAmount: Math.random() > 0.5 ? Math.floor(Math.random() * 300) + 100 : null, // Entre 100 et 400 €
    };

    // Création du dossier
    const newCase = await prisma.case.create({
      data: caseData,
    });
    cases.push(newCase);

    // Création d'événements pour ce dossier
    await prisma.caseEvent.create({
      data: {
        date: caseData.reportDate,
        type: EventType.CASE_CREATED,
        description: 'Création du dossier',
        actor: `${landlord.firstName} ${landlord.lastName}`,
        actorRole: Role.LANDLORD,
        importance: 3,
        caseId: newCase.id,
      },
    });

    // Ajout d'un événement de changement de statut si le statut n'est pas OPEN
    if (caseData.status !== CaseStatus.OPEN) {
      await prisma.caseEvent.create({
        data: {
          date: randomDate(caseData.reportDate, new Date()),
          type: EventType.STATUS_CHANGED,
          description: `Changement de statut vers ${caseData.status}`,
          actor: 'Système',
          actorRole: Role.ADMIN,
          importance: 2,
          caseId: newCase.id,
        },
      });
    }

    // Création de documents pour ce dossier
    const documentTypes = [
      DocumentType.LEASE,
      DocumentType.PAYMENT_COMMAND,
      DocumentType.INCOME_PROOF,
      DocumentType.PAYMENT_PLAN,
    ];

    for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
      await prisma.document.create({
        data: {
          title: `Document ${j + 1} - ${randomChoice(documentTypes)}`,
          type: randomChoice(documentTypes),
          filePath: `/uploads/documents/case_${newCase.id}_doc_${j + 1}.pdf`,
          fileSize: Math.floor(Math.random() * 5000000) + 100000, // Entre 100 Ko et 5 Mo
          mimeType: 'application/pdf',
          uploadedAt: randomDate(caseData.reportDate, new Date()),
          description: `Document relatif au dossier ${newCase.reference}`,
          isPublic: Math.random() > 0.7,
          caseId: newCase.id,
        },
      });
    }

    // Création de notifications pour ce dossier
    const notificationTypes = [
      NotificationType.CASE_UPDATE,
      NotificationType.DOCUMENT_ADDED,
      NotificationType.DEADLINE_REMINDER,
    ];

    // Notification pour le locataire
    await prisma.notification.create({
      data: {
        title: `Mise à jour de votre dossier ${newCase.reference}`,
        content: `Votre dossier a été mis à jour. Statut actuel : ${caseData.status}`,
        type: randomChoice(notificationTypes),
        priority: NotificationPriority.NORMAL,
        read: Math.random() > 0.5,
        readAt: Math.random() > 0.5 ? randomDate(caseData.reportDate, new Date()) : null,
        userId: tenant.id,
        caseId: newCase.id,
      },
    });

    // Notification pour le bailleur
    await prisma.notification.create({
      data: {
        title: `Mise à jour du dossier ${newCase.reference}`,
        content: `Le dossier a été mis à jour. Statut actuel : ${caseData.status}`,
        type: randomChoice(notificationTypes),
        priority: NotificationPriority.NORMAL,
        read: Math.random() > 0.5,
        readAt: Math.random() > 0.5 ? randomDate(caseData.reportDate, new Date()) : null,
        userId: landlord.id,
        caseId: newCase.id,
      },
    });

    // Création d'un plan de remboursement pour certains dossiers
    if (Math.random() > 0.6) {
      const startDate = randomDate(caseData.reportDate, new Date());
      const endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 12); // Plan sur 12 mois

      const repaymentPlan = await prisma.repaymentPlan.create({
        data: {
          totalAmount: caseData.debtAmount,
          startDate,
          endDate,
          status: RepaymentPlanStatus.ACTIVE,
          frequency: PaymentFrequency.MONTHLY,
          initialPayment: Math.floor(caseData.debtAmount * 0.1), // 10% initial
          regularAmount: Math.floor((caseData.debtAmount * 0.9) / 12), // Reste sur 12 mois
          caseId: newCase.id,
          tenantId: tenant.id,
          landlordId: landlord.id,
          notes: 'Plan de remboursement établi suite à médiation',
          validatedBy: 'Système',
          validatedAt: startDate,
        },
      });

      // Création des échéances
      for (let k = 0; k < 12; k++) {
        const dueDate = new Date(startDate);
        dueDate.setMonth(dueDate.getMonth() + k);

        let status;
        if (k < 3) {
          status = InstallmentStatus.PAID; // Les 3 premières échéances sont payées
        } else if (k < 5) {
          status = Math.random() > 0.5 ? InstallmentStatus.PAID : InstallmentStatus.PARTIALLY_PAID;
        } else {
          status = InstallmentStatus.PENDING;
        }

        const paidAmount = status === InstallmentStatus.PAID
          ? Math.floor((caseData.debtAmount * 0.9) / 12)
          : status === InstallmentStatus.PARTIALLY_PAID
            ? Math.floor(((caseData.debtAmount * 0.9) / 12) * 0.7)
            : null;

        const paidAt = (status === InstallmentStatus.PAID || status === InstallmentStatus.PARTIALLY_PAID)
          ? randomDate(dueDate, new Date(dueDate.getTime() + 5 * 24 * 60 * 60 * 1000)) // Payé dans les 5 jours
          : null;

        await prisma.installment.create({
          data: {
            dueDate,
            amount: Math.floor((caseData.debtAmount * 0.9) / 12),
            paidAmount,
            paidAt,
            status,
            paymentMethod: paidAmount ? randomChoice(['Virement', 'Chèque', 'Espèces']) : null,
            paymentReference: paidAmount ? `REF-${Math.floor(Math.random() * 10000)}` : null,
            repaymentPlanId: repaymentPlan.id,
            notes: status === InstallmentStatus.PARTIALLY_PAID ? 'Paiement partiel' : null,
          },
        });
      }
    }

    // Création d'une demande d'aide pour certains dossiers
    if (Math.random() > 0.7) {
      await prisma.aid.create({
        data: {
          type: randomChoice(Object.values(AidType)),
          status: randomChoice(Object.values(AidStatus)),
          amount: Math.floor(caseData.debtAmount * 0.4), // 40% de la dette
          requestedAt: randomDate(caseData.reportDate, new Date()),
          submittedAt: randomDate(caseData.reportDate, new Date()),
          validatedAt: Math.random() > 0.5 ? randomDate(caseData.reportDate, new Date()) : null,
          decisionDate: Math.random() > 0.5 ? randomDate(caseData.reportDate, new Date()) : null,
          paymentDate: Math.random() > 0.3 ? randomDate(caseData.reportDate, new Date()) : null,
          reason: 'Difficultés financières temporaires',
          applicationRef: `AID-${Math.floor(Math.random() * 10000)}`,
          aidPurpose: 'Apurement de la dette locative',
          beneficiary: Math.random() > 0.5 ? 'Locataire' : 'Bailleur',
          caseId: newCase.id,
          applicantId: tenant.id,
          notes: 'Demande d\'aide au FSL',
          followUpDate: randomDate(new Date(), new Date(2025, 11, 31)),
        },
      });
    }

    // Création d'une demande de médiation pour certains dossiers
    if (Math.random() > 0.6) {
      const mediator = await prisma.user.findFirst({
        where: { role: Role.MEDIATOR },
        skip: Math.floor(Math.random() * mediators.length),
        take: 1,
      });

      if (mediator) {
        const mediationRequest = await prisma.mediationRequest.create({
          data: {
            status: randomChoice(Object.values(MediationStatus)),
            reason: 'Recherche d\'une solution amiable pour le règlement de la dette',
            proposal: 'Plan d\'apurement sur 12 mois',
            deadline: randomDate(new Date(), new Date(2025, 11, 31)),
            disputeAmount: caseData.debtAmount,
            disputeDescription: 'Impayés de loyer suite à perte d\'emploi',
            preferredLanguage: 'Français',
            requesterId: tenant.id,
            mediatorId: mediator.id,
            caseId: newCase.id,
          },
        });

        // Création de réunions de médiation
        if (Math.random() > 0.5) {
          const meetingDate = randomDate(new Date(), new Date(2025, 6, 31));

          await prisma.mediationMeeting.create({
            data: {
              date: meetingDate,
              duration: 60,
              location: 'Centre de médiation, 15 rue de la Paix, 75002 Paris',
              videoLink: Math.random() > 0.5 ? 'https://visio.mediation.gouv.fr/room123' : null,
              status: randomChoice(Object.values(MeetingStatus)),
              notes: 'Première réunion de médiation',
              summary: Math.random() > 0.5 ? 'Discussion constructive, plan de remboursement envisagé' : null,
              attendees: JSON.stringify([
                { name: `${tenant.firstName} ${tenant.lastName}`, role: 'Locataire' },
                { name: `${landlord.firstName} ${landlord.lastName}`, role: 'Bailleur' },
                { name: `${mediator.firstName} ${mediator.lastName}`, role: 'Médiateur' },
              ]),
              mediationId: mediationRequest.id,
            },
          });
        }
      }
    }

    // Création de commentaires pour ce dossier
    if (Math.random() > 0.5) {
      const commentAuthors = [
        ...await prisma.user.findMany({ where: { role: Role.SOCIAL_WORKER }, take: 2 }),
        ...await prisma.user.findMany({ where: { role: Role.PREFECTURE }, take: 1 }),
      ];

      for (const author of commentAuthors) {
        if (Math.random() > 0.3) {
          await prisma.comment.create({
            data: {
              content: `Commentaire sur le dossier ${newCase.reference}. ${Math.random() > 0.5 ? 'Situation à suivre de près.' : 'Évolution positive du dossier.'}`,
              isInternal: Math.random() > 0.3,
              authorId: author.id,
              caseId: newCase.id,
            },
          });
        }
      }
    }

    // Création de messages entre locataire et bailleur
    if (Math.random() > 0.4) {
      const messageCount = Math.floor(Math.random() * 5) + 1;

      for (let m = 0; m < messageCount; m++) {
        const isFromTenant = Math.random() > 0.5;
        const sender = isFromTenant ? tenant : landlord;
        const recipient = isFromTenant ? landlord : tenant;

        await prisma.message.create({
          data: {
            content: isFromTenant
              ? `Bonjour, concernant mon dossier ${newCase.reference}, je souhaiterais discuter d'un plan de remboursement.`
              : `Bonjour, j'ai bien reçu votre demande concernant le dossier ${newCase.reference}. Nous pouvons en discuter.`,
            read: Math.random() > 0.6,
            readAt: Math.random() > 0.6 ? randomDate(caseData.reportDate, new Date()) : null,
            senderId: sender.id,
            recipientId: recipient.id,
            caseId: newCase.id,
          },
        });
      }
    }
  }

  console.log(`Created ${cases.length} cases with related data`);

  // Création de réunions CCAPEX
  console.log('Creating CCAPEX meetings...');

  for (let i = 0; i < 3; i++) {
    const meetingDate = randomDate(new Date(2023, 0, 1), new Date(2025, 11, 31));

    const ccapexMeeting = await prisma.ccapexMeeting.create({
      data: {
        date: meetingDate,
        location: 'Préfecture de Paris, Salle 302',
        department: '75',
        agenda: `Ordre du jour de la réunion CCAPEX du ${meetingDate.toLocaleDateString()}`,
        minutes: Math.random() > 0.5 ? `Compte-rendu de la réunion CCAPEX du ${meetingDate.toLocaleDateString()}` : null,
        attendees: JSON.stringify([
          { name: 'Isabelle Dupont', role: 'Présidente' },
          { name: 'Jacques Martin', role: 'Secrétaire' },
          { name: 'Nathalie Leroy', role: 'Membre - Département' },
          { name: 'Michel Bernard', role: 'Membre - CAF' },
          { name: 'Christine Moreau', role: 'Membre - ADIL' },
        ]),
      },
    });

    // Ajout de dossiers à la réunion CCAPEX
    const casesToAdd = await prisma.case.findMany({
      take: Math.floor(Math.random() * 5) + 3, // Entre 3 et 7 dossiers par réunion
      where: {
        urgency: {
          in: [UrgencyLevel.HIGH, UrgencyLevel.CRITICAL],
        },
      },
    });

    for (let j = 0; j < casesToAdd.length; j++) {
      await prisma.ccapexMeetingCase.create({
        data: {
          meetingId: ccapexMeeting.id,
          caseId: casesToAdd[j].id,
          decision: Math.random() > 0.5 ? 'Maintien dans le logement avec plan d\'apurement' : 'Orientation vers le FSL',
          recommendation: 'Suivi renforcé par un travailleur social',
          priority: j + 1,
        },
      });
    }
  }

  console.log('Created CCAPEX meetings');

  // Création de statistiques
  console.log('Creating statistics...');

  const departments = ['75', '77', '78', '91', '92', '93', '94', '95'];
  const periods = ['2023-T1', '2023-T2', '2023-T3', '2023-T4', '2024-T1', '2024-T2'];

  for (const department of departments) {
    for (const period of periods) {
      await prisma.caseStatistic.create({
        data: {
          date: randomDate(new Date(2023, 0, 1), new Date()),
          period,
          department,
          city: department === '75' ? 'Paris' : null,
          newCasesCount: Math.floor(Math.random() * 100) + 20,
          resolvedCount: Math.floor(Math.random() * 80) + 10,
          evictionCount: Math.floor(Math.random() * 20) + 5,
          mediationCount: Math.floor(Math.random() * 50) + 15,
          preventionRate: Math.random() * 0.5 + 0.3, // Entre 30% et 80%
          averageDebtAmount: Math.floor(Math.random() * 5000) + 2000,
        },
      });
    }
  }

  console.log('Created statistics');

  console.log('Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
