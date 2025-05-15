# Product Requirements Document (PRD) - ALEXI

## 1. Introduction

### 1.1 Purpose

This PRD outlines the requirements for **ALEXI**, a user-centric application designed to replace EXPLOC, the French system for managing eviction procedures. ALEXI aims to enhance eviction prevention, improve user experience, and maximize social impact by fostering collaboration among stakeholders (tenants, landlords, judicial officers, social services, prefectures, and CCAPEX). The application prioritizes early intervention, accessibility, and transparency to reduce evictions and support tenants in financial distress.

### 1.2 Background

EXPLOC, created in 2016, is a data processing system for eviction prevention and management, focusing on administrative coordination and data dematerialization. While effective for tracking procedures, it lacks user-friendliness, proactive prevention mechanisms, and robust support for tenants. ALEXI addresses these gaps by introducing a modern, intuitive interface, proactive tools for debt resolution, and resources to empower users, aligning with France’s legal framework (e.g., Loi ALUR, Loi Kasbarian) and social policies.

### 1.3 Scope

ALEXI will:

* Provide a centralized platform for managing eviction procedures with a focus on prevention.

* Offer user-friendly interfaces tailored to tenants, landlords, judicial officers, social workers, and prefectures.

* Integrate proactive tools like debt calculators, mediation support, and resource directories.

* Ensure compliance with French data protection laws (CNIL, GDPR) and eviction regulations.

* Support multi-channel access (web, mobile app, SMS notifications).

Out of scope:

* Direct financial aid distribution (handled by external systems like FSL or CAF).

* Legal representation services.

## 2. Objectives
  
### 2.1 Business Objectives
* **Reduce evictions**: Decrease the number of evictions with force publique by 20% within 3 years by enabling early intervention.

* **Improve prevention**: Increase the proportion of cases resolved before judicial escalation by 30%.

* **Enhance user satisfaction**: Achieve a Net Promoter Score (NPS) of 70+ for tenants and landlords.

* **Streamline processes**: Reduce administrative processing time for eviction notifications by 25%.

* **Ensure compliance**: Maintain full compliance with CNIL, GDPR, and French eviction laws (e.g., Articles L. 412-5, L. 153-1 of the Code des procédures civiles d'exécution).

### 2.2 User Objectives

* **Tenants**: Access clear guidance, resources, and tools to resolve debt and avoid eviction.

* **Landlords**: Easily report issues, access mediation, and track case progress.

* **Judicial Officers**: Efficiently submit dematerialized notifications and coordinate with prefectures/CCAPEX.

* **Social Services/CCAPEX**: Monitor cases, provide support, and track prevention outcomes.

* **Prefectures**: Oversee procedures, ensure compliance, and access analytics for policy decisions.

## 3. Stakeholders

* **Primary Users**:

  * Tenants facing eviction risk.

  * Landlords (private and social housing).

  * Commissaires de justice (judicial officers).

* **Secondary Users**:

  * Social workers and CCAPEX members.

  * Prefecture agents and police/gendarmerie.

* **Internal Stakeholders**:

  * Ministry of Housing (Délégation à l'hébergement et à l'accès au logement).

  * Development and operations teams.

* **External Stakeholders**:

  * CNIL for data protection compliance.

  * CAF, FSL, and ADIL for integration with aid systems.

## 4. Functional Requirements

### 4.1 Core Features

4.1.1 User Authentication and Role-Based Access

* Secure login via loginand password or FranceConnect for tenants, landlords, and officials.

* Role-based access control (RBAC) to restrict data visibility (e.g., tenants see only their case, prefectures see aggregated data).

* Multi-factor authentication (MFA) for sensitive roles (e.g., prefectures, judicial officers).

4.1.2 Case Management Dashboard

* **Tenants**: View case status, upcoming deadlines, and recommended actions (e.g., contact social services, apply for FSL).

* **Landlords**: Report impayés, track case progress, and access mediation options.

* **Judicial Officers**: Submit dematerialized notifications (e.g., commandement de payer) to prefectures/CCAPEX.

* **Social Services/CCAPEX**: Monitor active cases, assign tasks, and track prevention outcomes.

* **Prefectures**: Oversee all cases in their jurisdiction with filters (e.g., by status, urgency).

4.1.3 Prevention Tools

* **Debt Calculator**: Allows tenants to input income, expenses, and debt to create repayment plans.

* **Resource Directory**: Provides contact details for local social services, ADIL, CAF, and legal aid (e.g., Fondation Abbé Pierre’s Allô Prévention Expulsion).

* **Mediation Hub**: Facilitates communication between tenants, landlords, and social workers to negotiate solutions (e.g., payment plans, relogement).

* **Early Warning System**: Alerts social services and CCAPEX when impayés are reported, triggering outreach within 48 hours.

4.1.4 Notifications and Alerts

* Multi-channel notifications (email, SMS, in-app) for key events (e.g., commandement de payer, court dates).

* Tenant-friendly reminders with clear action steps (e.g., “Contact ADIL by [date] to apply for FSL”).

* Escalation alerts for judicial officers and prefectures when deadlines approach.

4.1.5 Reporting and Analytics

* **Tenant/Landlord**: Basic case summary (e.g., debt status, actions taken).

* **CCAPEX/Social Services**: Case resolution rates, prevention success metrics.

* **Prefectures**: Departmental analytics (e.g., eviction trends, impayé causes).

* Exportable reports in PDF/CSV for audits and policy planning.

### 4.2 User Interface Requirements

* **Accessibility**: WCAG 2.1 compliance (AA level) for users with disabilities.

* **Design system :&#x20;**&#x75;tiliser exclusivement le Design system de l'etat francais que l'on trouve sur les pages du site suivant : <https://www.systeme-de-design.gouv.fr/>

* **Multilingual Support**: French (default) and English for key tenant-facing features.

* **Responsive Design**: Optimized for web browsers (Chrome, Firefox, Safari) and mobile apps (iOS, Android).

* **Simplified Language**: Use plain language for tenant-facing content (e.g., avoid legal jargon).

### 4.3 Integrations

* **FranceConnect**: For secure authentication.

* **CAF/MSA**: To verify APL (housing aid) status and integrate aid applications.

* **FSL**: To streamline applications for financial aid.

* **EXPLOC Legacy Data**: Migrate historical data to ALEXI with validation checks.

* **Legifrance API**: To reference eviction laws and regulations dynamically.

## 5. Non-Functional Requirements

### 5.1 Performance

* Support 500,000 concurrent users during peak periods (e.g., end of trêve hivernale).

* Page load time < 2 seconds for 95% of requests.

* Uptime of 99.9% (excluding scheduled maintenance).

### 5.2 Security

* Data encryption (AES-256) for storage and transit.

* Compliance with GDPR and CNIL guidelines (e.g., data minimization, 4-year retention).

* Regular security audits and penetration testing.

### 5.3 Scalability

* Container architecture (docker) to handle increased load.

* Horizontal scaling for user growth (e.g., new departments adopting ALEXI).

### 5.4 Data Privacy

* Collect only necessary data (e.g., tenant income, debt amount, case status).

* Provide tenants with data access/rectification tools per GDPR Article 15.

* Anonymized analytics for prefecture reporting.

## 6. User Stories

### 6.1 Tenant

* **As a tenant**, I want to receive clear, timely notifications about my case status, so I can take action to avoid eviction.

* **As a tenant**, I want to calculate a feasible repayment plan, so I can propose it to my landlord or social services.

* **As a tenant**, I want access to local resources (e.g., ADIL, CAF), so I can get help quickly.

### 6.2 Landlord

* **As a landlord**, I want to report impayés easily, so I can start the process without delays.

* **As a landlord**, I want to explore mediation options, so I can resolve issues without court proceedings.

### 6.3 Judicial Officer

* **As a judicial officer**, I want to submit notifications to prefectures/CCAPEX in one click, so I can save time.

* **As a judicial officer**, I want to track case progress, so I can coordinate with other stakeholders.

### 6.4 Social Services/CCAPEX

* **As a social worker**, I want to receive alerts about new impayé cases, so I can reach out to tenants early.

* **As a CCAPEX member**, I want to see prevention success metrics, so I can evaluate our impact.

### 6.5 Prefecture

* **As a prefecture agent**, I want to monitor eviction trends, so I can inform policy decisions.

* **As a prefecture agent**, I want to ensure compliance with legal deadlines, so I can avoid penalties.

## 7. Success Metrics

* **Prevention Impact**:

  * % of cases resolved before judicial escalation (target: 30% increase).

  * % reduction in evictions with force publique (target: 20% in 3 years).

* **User Engagement**:

  * Tenant adoption rate (target: 50% of eligible tenants using ALEXI within 1 year).

  * NPS for tenants and landlords (target: 70+).

* **Operational Efficiency**:

  * Average time to process notifications (target: 25% reduction).

  * % of cases with complete data (target: 95%).

## 8. Assumptions and Constraints

### 8.1 Assumptions

* Stakeholders (e.g., prefectures, CCAPEX) will adopt ALEXI and provide training to staff.

* Tenants have access to smartphones or internet for app usage.

* CAF/FSL systems will provide APIs for integration.

### 8.2 Constraints

* Budget: Development and maintenance costs must align with Ministry of Housing funding.

* Timeline: MVP launch by Q4 2026 to align with EXPLOC’s phase-out.

* Legal: Must comply with evolving eviction laws (e.g., Loi Kasbarian decrees).

## 9. Development

Use react language and for the dsfr use this : <https://github.com/codegouvfr/react-dsfr> and you can find example here : <https://react-dsfr.codegouv.studio/custom-branding>


## 10. Risks and Mitigation

* **Risk**: Low tenant adoption due to digital literacy barriers.

  * **Mitigation**: Partner with ADIL and social services for in-person support; offer SMS-based access.

* **Risk**: Data privacy concerns from CNIL or tenants.

  * **Mitigation**: Conduct pre-launch CNIL audit; provide transparent data usage policies.

* **Risk**: Resistance from EXPLOC users (e.g., prefectures).

  * **Mitigation**: Offer training and phased transition with EXPLOC data migration.

## 11. Appendix

### 11.1 Glossary

* **CCAPEX**: Commission de Coordination des Actions de Prévention des Expulsions Locatives.

* **FSL**: Fonds de Solidarité pour le Logement.

* **CAF**: Caisse d’Allocations Familiales.

* **APL**: Aide Personnalisée au Logement.

* **Trêve Hivernale**: Winter eviction moratorium (1 November–31 March).

### 11.2 References

* Décret n° 2025-348 du 16 avril 2025 (EXPLOC data processing).

* Loi ALUR (24 mars 2014) and Loi Kasbarian (27 juillet 2023).

* CNIL guidelines for personal data processing.

* Fondation Abbé Pierre’s Allô Prévention Expulsion reports.
