import { PrismaClient, Role } from '../src/generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

async function main() {
  console.log('Starting to seed the database...');

  // Suppression des données existantes
  await prisma.user.deleteMany({});
  console.log('Deleted existing users');

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
    },
  });
  console.log('Created admin account');

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
