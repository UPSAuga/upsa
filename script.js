// DOM Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// State variables
let darkMode = false;
let menuOpen = false;
let currentGallery = 'camp';
let lightboxIndex = 0;
let currentArticle = null;

// Gallery images for lightbox
const galleryImages = [
    'images/med01.jpg',
    'images/med02.jpg',
    'images/med03.jpg',
    'images/med04.jpg',
    'images/med05.jpg',
    'images/sym01.jpg',
    'images/sym02.jpg',
    'images/sym03.jpg',
    'images/sym04.jpg',
    'images/sym05.jpg',
    'images/sym06.jpg',
    'images/sym07.jpg',
    'images/sym08.jpg',
    'images/sym09.jpg',
    'images/sym10.jpg',
    'images/sym11.jpg',
    'images/upsa-01.jpg',
    'images/upsa-02.jpg',
    'images/upsa-03.jpg',
    'images/upsa-04.jpg',
    'images/upsa-05.jpg',
    'images/upsa-06.jpg',
    'images/upsa-07.jpg',
    'images/upsa-08.jpg',
    'images/upsa-09.jpg',
    'images/upsa-10.jpg',
    'images/upsa-11.jpg',
    'images/sym12.jpg',
    'images/sym13.jpg',
    'images/sym14.jpg',
    'images/sym15.jpg',
    'images/sym16.jpg',
    'images/sym17.jpg',
    'images/sym18.jpg',
    'images/sym19.jpg',
    'images/sym20.jpg',
    'images/sym21.jpg',
    'images/sym22.jpg',
    'images/sym23.jpg',
    'images/upsa-12.jpg',
    'images/upsa-13.jpg',
    'images/upsa-14.jpg',
    'images/upsa-15.jpg',
    'images/upsa-16.jpg',
    'images/upsa-17.jpg',
    'images/upsa-18.jpg'
];

// Article content for the full article page
const articles = {
    'future-pharmacy': {
        title: 'The Future of Pharmacy Practice in Uganda',
        author: 'Dongo Sira',
        date: 'AUG 15, 2025',
        image: 'images/pha.jpg',
        content: `<p>Pharmacy practice in Uganda is undergoing a significant transformation driven by technological advancements, policy changes, and evolving healthcare needs. As the country strives to achieve universal health coverage, the role of pharmacists is expanding beyond traditional dispensing functions to include clinical services, patient counseling, and public health initiatives.</p>
        
        <h2>Technological Advancements</h2>
        <p>The integration of digital technologies in pharmacy practice is revolutionizing how medications are managed and dispensed. Electronic prescribing systems, inventory management software, and telepharmacy services are being gradually adopted across urban centers. These technologies not only improve efficiency but also reduce medication errors and enhance patient safety.</p>
        
        <p>In rural areas, mobile health (mHealth) applications are bridging the gap between patients and healthcare providers. Pharmacists are using smartphones to conduct remote consultations, monitor chronic conditions, and provide medication adherence support to patients in remote locations.</p>
        
        <h2>Policy and Regulatory Changes</h2>
        <p>The National Drug Authority (NDA) has recently introduced several regulatory reforms aimed at improving pharmaceutical services. These include stricter licensing requirements for pharmacies, enhanced monitoring of drug quality, and expanded scope of practice for pharmacists. The new guidelines now allow pharmacists to initiate certain treatments for minor ailments and provide vaccinations, aligning Uganda with international best practices.</p>
        
        <p>Additionally, the Ministry of Health has developed a National Pharmaceutical Policy that emphasizes the importance of pharmaceutical care and rational use of medicines. This policy framework provides a roadmap for strengthening pharmaceutical services across all levels of the healthcare system.</p>
        
        <h2>Education and Training</h2>
        <p>Pharmacy education in Uganda is also evolving to meet the changing demands of the profession. The curriculum in accredited pharmacy schools now includes more clinical training, communication skills, and public health components. Interprofessional education is being promoted to foster collaboration between pharmacists and other healthcare providers.</p>
        
        <p>Continuing professional development programs are being established to ensure that practicing pharmacists stay current with the latest advances in pharmacotherapy and healthcare delivery. These programs are crucial for maintaining high standards of practice and ensuring patient safety.</p>
        
        <h2>Challenges and Opportunities</h2>
        <p>Despite these positive developments, several challenges remain. There is still a shortage of pharmacists, particularly in rural areas, and infrastructure limitations hinder the implementation of advanced pharmaceutical services. Supply chain issues continue to affect the availability of essential medicines, and funding for pharmaceutical services remains inadequate.</p>
        
        <p>However, these challenges also present opportunities for innovation and improvement. Public-private partnerships are emerging as a viable model for expanding pharmaceutical services. Community pharmacy initiatives are gaining traction, and there is growing recognition of the value pharmacists bring to the healthcare system.</p>
        
        <h2>The Road Ahead</h2>
        <p>The future of pharmacy practice in Uganda is promising. With continued investment in education, infrastructure, and policy development, pharmacists are poised to play a more central role in healthcare delivery. The Uganda Pharmaceutical Students Association (UPSA) is actively involved in advocating for the profession and preparing the next generation of pharmacists to meet the challenges and opportunities ahead.</p>
        
        <p>As we look to the future, it is clear that pharmacy practice in Uganda will continue to evolve, driven by innovation, collaboration, and a shared commitment to improving health outcomes for all Ugandans.</p>`
    },
    'community-pharmacy': {
        title: 'Community Pharmacy in Rural Areas',
        author: 'John Smith',
        date: 'May 12, 2025',
        image: 'images/pha2.jpg',
        content: `<p>Community pharmacies in rural Uganda face unique challenges and opportunities that require innovative solutions to ensure access to essential medicines and pharmaceutical care for underserved populations. This article explores the current landscape, challenges, and potential strategies for establishing and sustaining community pharmacies in rural areas.</p>
        
        <h2>Current Landscape</h2>
        <p>In rural Uganda, access to pharmaceutical services is limited, with many communities relying on informal drug sellers or traveling long distances to reach the nearest pharmacy. The World Health Organization estimates that only 30% of rural residents have access to a licensed pharmacy within a 5-kilometer radius.</p>
        
        <p>Community pharmacies in rural areas often operate with limited resources, facing challenges such as unreliable electricity, poor road networks, and limited access to continuing education for pharmacists. Despite these challenges, community pharmacies play a vital role in providing essential medicines, health education, and basic healthcare services.</p>
        
        <h2>Key Challenges</h2>
        <p><strong>Infrastructure Limitations:</strong> Many rural areas lack reliable electricity and internet connectivity, making it difficult to implement electronic inventory systems, temperature-controlled storage for medicines, and digital health records.</p>
        
        <p><strong>Supply Chain Issues:</strong> The distribution of medicines to rural areas is often inefficient, leading to stockouts of essential medicines and expiration of products before they can be dispensed.</p>
        
        <p><strong>Human Resource Shortages:</strong> There is a significant shortage of trained pharmacists willing to work in rural areas, where living conditions and professional development opportunities are limited.</p>
        
        <p><strong>Financial Sustainability:</strong> Rural pharmacies often struggle with financial viability due to lower patient volumes and higher operational costs associated with transportation and supply chain management.</p>
        
        <h2>Innovative Solutions</h2>
        <p><strong>Mobile Pharmacies:</strong> Mobile pharmacy units can travel to remote communities on a regular schedule, providing essential medicines and pharmaceutical services. These units can be equipped with solar-powered refrigeration and telemedicine capabilities.</p>
        
        <p><strong>Community Health Worker Integration:</strong> Training community health workers in basic pharmaceutical services can extend the reach of community pharmacies. These workers can be responsible for medication distribution, adherence monitoring, and health education under the supervision of a pharmacist.</p>
        
        <p><strong>Digital Health Platforms:</strong> Mobile applications and SMS-based systems can be used for inventory management, appointment scheduling, and patient education, overcoming infrastructure limitations.</p>
        
        <p><strong>Public-Private Partnerships:</strong> Collaborations between government agencies, non-governmental organizations, and private sector entities can provide the necessary funding and resources to establish and sustain rural community pharmacies.</p>
        
        <h2>Success Stories</h2>
        <p>In the Katakwi district, a community pharmacy initiative has successfully reduced medication stockouts by 60% through the implementation of a drone delivery system for essential medicines. The pharmacy has also trained 15 community health workers who provide medication adherence support to over 500 patients with chronic conditions.</p>
        
        <p>In Nakaseke district, a mobile pharmacy unit visits 12 remote villages on a bi-weekly schedule, providing essential medicines and pharmaceutical services to over 1,200 residents. The unit is equipped with solar-powered refrigeration and a telemedicine station that connects patients with pharmacists and physicians in urban centers.</p>
        
        <h2>Recommendations</h2>
        <p>1. Develop targeted incentives for pharmacists to work in rural areas, including housing allowances, professional development opportunities, and career advancement pathways.</p>
        
        <p>2. Invest in infrastructure improvements, particularly reliable electricity and internet connectivity, to support the operation of community pharmacies.</p>
        
        <p>3. Implement innovative supply chain solutions, such as drone delivery and regional distribution hubs, to ensure consistent availability of essential medicines.</p>
        
        <p>4. Expand training programs for community health workers in pharmaceutical services to extend the reach of community pharmacies.</p>
        
        <p>5. Establish public-private partnerships to provide sustainable funding and resources for rural community pharmacy initiatives.</p>
        
        <p>6. Develop digital health platforms that are accessible even in areas with limited internet connectivity, using SMS-based systems and offline-capable mobile applications.</p>
        
        <p>The establishment and sustainability of community pharmacies in rural Uganda is critical for achieving universal health coverage and ensuring equitable access to essential medicines and pharmaceutical care. Through innovative solutions and collaborative efforts, we can overcome the challenges and create a robust network of community pharmacies that serve the healthcare needs of rural populations.</p>`
    },
    'upsa-advocacy': {
        title: 'UPSA Advocacy for Improved Pharmacy Education',
        author: 'UPSA PR Team',
        date: 'May 10, 2025',
        image: 'images/sym09.jpg',
        content: `<p>The Uganda Pharmaceutical Students Association (UPSA) has been at the forefront of advocacy efforts to improve pharmacy education standards in Uganda. This article highlights our recent initiatives, achievements, and ongoing efforts to ensure that pharmacy students receive high-quality education that prepares them for the evolving healthcare landscape.</p>
        
        <h2>Background and Context</h2>
        <p>Pharmacy education in Uganda has undergone significant changes in recent years, with the transition from a 4-year to a 5-year program and the introduction of new curriculum guidelines by the National Council for Higher Education (NCHE). While these changes represent progress, several challenges remain in ensuring consistent quality across all pharmacy schools in the country.</p>
        
        <p>UPSA has identified key areas for improvement, including standardization of curriculum implementation, enhancement of practical training opportunities, improvement of teaching resources, and better integration of technology in pharmacy education.</p>
        
        <h2>Recent Advocacy Initiatives</h2>
        <p><strong>National Pharmacy Education Summit:</strong> In March 2025, UPSA organized the first National Pharmacy Education Summit, bringing together representatives from all accredited pharmacy schools, regulatory bodies, professional associations, and healthcare providers. The summit resulted in a comprehensive report with recommendations for improving pharmacy education standards.</p>
        
        <p><strong>Curriculum Review Task Force:</strong> UPSA established a Curriculum Review Task Force comprising student leaders, faculty members, and industry experts. The task force conducted a comprehensive review of the current pharmacy curriculum and developed recommendations for updating the curriculum to include emerging areas such as pharmacogenomics, digital health, and personalized medicine.</p>
        
        <p><strong>Infrastructure Assessment Survey:</strong> UPSA conducted a nationwide survey of pharmacy school facilities, laboratories, and teaching resources. The survey revealed significant disparities in infrastructure quality between different institutions, with some schools lacking essential equipment for practical training.</p>
        
        <h2>Key Achievements</h2>
        <p><strong>Standardized Practical Training Guidelines:</strong> As a result of UPSA's advocacy, the NCHE has approved standardized guidelines for practical training in pharmacy programs. These guidelines ensure that all students receive consistent, high-quality practical experience regardless of their institution.</p>
        
        <p><strong>Increased Funding for Teaching Resources:</strong> Following UPSA's presentation of the infrastructure assessment findings, the Ministry of Education has allocated additional funding for upgrading laboratory equipment and teaching resources in pharmacy schools.</p>
        
        <p><strong>Enhanced Industry-Academia Collaboration:</strong> UPSA has facilitated partnerships between pharmacy schools and pharmaceutical companies, resulting in increased internship opportunities, guest lectures by industry experts, and donation of equipment and materials for practical training.</p>
        
        <p><strong>Improved Student Support Services:</strong> UPSA's advocacy has led to the establishment of dedicated student support services in all pharmacy schools, including academic counseling, mental health resources, and career guidance.</p>
        
        <h2>Ongoing Advocacy Priorities</h2>
        <p><strong>Faculty Development:</strong> UPSA is advocating for increased investment in faculty development programs to ensure that pharmacy educators are up-to-date with the latest advances in pharmaceutical sciences and teaching methodologies.</p>
        
        <p><strong>Technology Integration:</strong> We are working with institutions to integrate digital learning platforms, simulation technology, and virtual reality tools into pharmacy education to enhance the learning experience.</p>
        
        <p><strong>Research Opportunities:</strong> UPSA is promoting the expansion of research opportunities for pharmacy students, including funding for student research projects and participation in national and international conferences.</p>
        
        <p><strong>Interprofessional Education:</strong> We are advocating for increased interprofessional education opportunities that allow pharmacy students to learn and work alongside students from other healthcare disciplines.</p>
        
        <h2>Student-Led Initiatives</h2>
        <p>UPSA has launched several student-led initiatives to complement our advocacy efforts:</p>
        
        <p><strong>Peer Tutoring Program:</strong> A nationwide peer tutoring program connects senior pharmacy students with juniors to provide academic support and mentorship.</p>
        
        <p><strong>Pharmacy Education Webinars:</strong> Monthly webinars featuring experts in pharmaceutical education, clinical practice, and research provide additional learning opportunities for students.</p>
        
        <p><strong>Resource Sharing Platform:</strong> An online platform allows students from different institutions to share study materials, practical guides, and educational resources.</p>
        
        <p><strong>Mentorship Program:</strong> A mentorship program connects pharmacy students with practicing pharmacists who provide guidance on career development and professional practice.</p>
        
        <h2>Future Directions</h2>
        <p>Looking ahead, UPSA is committed to continuing our advocacy for improved pharmacy education in Uganda. Our future priorities include:</p>
        
        <p>1. Establishing a National Pharmacy Education Quality Assurance Committee to monitor and ensure consistent standards across all institutions.</p>
        
        <p>2. Developing a comprehensive digital learning platform for pharmacy education that can be accessed by students nationwide.</p>
        
        <p>3. Expanding international collaborations and exchange programs to expose Ugandan pharmacy students to global best practices.</p>
        
        <p>4. Advocating for increased government funding for pharmacy education and research.</p>
        
        <p>5. Promoting innovation in pharmacy education through the integration of artificial intelligence, data analytics, and other emerging technologies.</p>
        
        <p>6. Strengthening the connection between pharmacy education and community healthcare needs through service-learning programs and community-based research.</p>
        
        <p>UPSA remains dedicated to ensuring that pharmacy students in Uganda receive the highest quality education that prepares them to be competent, ethical, and innovative pharmacists. Through continued advocacy, collaboration, and innovation, we are shaping the future of pharmacy education in Uganda and contributing to the advancement of healthcare for all Ugandans.</p>`
    },
    'access-medicines': {
        title: 'Access to Medicines in Uganda: Challenges and Solutions',
        author: 'Pharmaceutical Advocates',
        date: 'May 8, 2025',
        image: 'images/pha2.jpg',
        content: `<p>Access to essential medicines remains a critical challenge in Uganda, affecting millions of people across the country. Despite significant progress in recent years, disparities in medicine access persist, particularly in rural and underserved communities. This article examines the current state of medicine access in Uganda, identifies key challenges, and proposes comprehensive solutions to improve access for all Ugandans.</p>
        
        <h2>Current State of Medicine Access</h2>
        <p>According to the World Health Organization, approximately 40% of Ugandans face difficulties in accessing essential medicines. The situation is particularly dire in rural areas, where access rates are significantly lower than in urban centers. Key statistics include:</p>
        
        <ul>
            <li>Only 35% of rural health facilities have a consistent supply of essential medicines</li>
            <li>The average distance to the nearest pharmacy in rural areas is 15 kilometers</li>
            <li>Out-of-pocket expenditure accounts for 60% of total medicine costs</li>
            <li>Stockouts of essential medicines occur in 45% of public health facilities</li>
        </ul>
        
        <p>These challenges disproportionately affect vulnerable populations, including children, the elderly, and those with chronic conditions such as HIV/AIDS, diabetes, and hypertension.</p>
        
        <h2>Key Challenges</h2>
        <p><strong>Supply Chain Inefficiencies:</strong> The medicine supply chain in Uganda faces numerous challenges, including poor coordination between procurement, distribution, and inventory management. This results in both stockouts and expiration of medicines before they can be used.</p>
        
        <p><strong>Financial Barriers:</strong> High medicine prices and limited insurance coverage create significant financial barriers to access. Many patients are forced to choose between purchasing medicines and meeting other basic needs.</p>
        
        <p><strong>Geographic Disparities:</strong> The distribution of pharmacies and health facilities is highly uneven, with urban areas having significantly better access than rural regions. This geographic disparity is compounded by poor transportation infrastructure.</p>
        
        <p><strong>Quality Assurance:</strong> The prevalence of substandard and falsified medicines remains a concern, particularly in informal markets and unregulated outlets. This not only affects treatment outcomes but also undermines trust in the healthcare system.</p>
        
        <p><strong>Human Resource Shortages:</strong> There is a significant shortage of trained pharmacists and pharmacy technicians, particularly in rural areas. This limits the availability of professional pharmaceutical services and contributes to improper medicine use.</p>
        
        <p><strong>Policy and Regulatory Gaps:</strong> While Uganda has made progress in pharmaceutical regulation, gaps remain in enforcement, monitoring, and coordination between different regulatory bodies.</p>
        
        <h2>Comprehensive Solutions</h2>
        <p><strong>Strengthening the Supply Chain:</strong>
        <ul>
            <li>Implement an integrated medicine supply chain management system using digital technology for real-time inventory tracking and demand forecasting</li>
            <li>Establish regional distribution hubs to improve efficiency and reduce transportation costs</li>
            <li>Introduce performance-based incentives for supply chain staff to improve accountability and efficiency</li>
            <li>Develop strategic partnerships with private logistics companies for medicine distribution</li>
        </ul>
        </p>
        
        <p><strong>Improving Financial Access:</strong>
        <ul>
            <li>Expand the National Health Insurance Scheme to include comprehensive medicine coverage</li>
            <li>Implement targeted subsidy programs for essential medicines, particularly for chronic conditions</li>
            <li>Establish medicine voucher programs for low-income populations</li>
            <li>Encourage the development of community-based health insurance schemes</li>
        </ul>
        </p>
        
        <p><strong>Enhancing Geographic Access:</strong>
        <ul>
            <li>Deploy mobile pharmacy units to serve remote communities on a regular schedule</li>
            <li>Establish community medicine distribution points staffed by trained community health workers</li>
            <li>Utilize drone technology for emergency medicine delivery to remote areas</li>
            <li>Implement telepharmacy services to provide remote consultations and prescription services</li>
        </ul>
        </p>
        
        <p><strong>Ensuring Quality and Safety:</strong>
        <ul>
            <li>Strengthen the capacity of the National Drug Authority for monitoring and enforcement</li>
            <li>Implement a nationwide medicine quality surveillance system</li>
            <li>Develop public awareness campaigns about the dangers of substandard and falsified medicines</li>
            <li>Establish a medicine authentication system using mobile technology</li>
        </ul>
        </p>
        
        <p><strong>Building Human Capacity:</strong>
        <ul>
            <li>Expand pharmacy education programs to increase the number of trained professionals</li>
            <li>Implement targeted incentives for pharmacists to work in underserved areas</li>
            <li>Develop comprehensive training programs for community health workers in medicine management</li>
            <li>Establish continuing professional development programs for practicing pharmacists</li>
        </ul>
        </p>
        
        <h2>Innovative Approaches</h2>
        <p><strong>Digital Health Solutions:</strong> Mobile applications can be used for medicine inventory management, patient education, and adherence monitoring. SMS-based systems can alert health facilities about stock levels and upcoming deliveries.</p>
        
        <p><strong>Public-Private Partnerships:</strong> Collaborations between government, non-governmental organizations, and private sector entities can leverage resources and expertise to improve medicine access. Examples include corporate social responsibility initiatives that fund medicine distribution programs.</p>
        
        <p><strong>Community-Based Models:</strong> Community medicine groups can pool resources to purchase medicines in bulk at discounted rates. These groups can also provide peer support for medication adherence and health education.</p>
        
        <p><strong>Local Production:</strong> Investing in local pharmaceutical manufacturing can reduce dependence on imports, improve supply chain resilience, and create economic opportunities. This requires supportive policies, investment in technology, and workforce development.</p>
        
        <h2>Success Stories</h2>
        <p>In the Sironko district, a community-based medicine distribution program has reduced medicine stockouts by 70% and improved treatment adherence for chronic conditions by 45%. The program utilizes trained community health workers who distribute medicines and provide health education in their villages.</p>
        
        <p>In Kampala, a public-private partnership between the city authority and a pharmaceutical company has established 15 community medicine kiosks in low-income neighborhoods. These kiosks provide essential medicines at subsidized prices and have served over 50,000 patients in the first year of operation.</p>
        
        <p>A digital medicine inventory system implemented in 30 health facilities in the Western Region has reduced medicine wastage by 30% and improved stock availability by 50%. The system provides real-time data to both facility managers and central supply chain coordinators.</p>
        
        <h2>Policy Recommendations</h2>
        <p>1. Develop a comprehensive National Medicine Access Strategy with clear targets and implementation timelines.</p>
        
        <p>2. Increase government funding for medicine procurement and distribution, with a focus on essential medicines for priority health conditions.</p>
        
        <p>3. Strengthen coordination between different government agencies involved in medicine access, including the Ministry of Health, National Drug Authority, and Local Government authorities.</p>
        
        <p>4. Implement policies that support local pharmaceutical production and technology transfer.</p>
        
        <p>5. Establish a national medicine price regulation framework to ensure affordability while maintaining quality.</p>
        
        <p>6. Develop a comprehensive monitoring and evaluation system to track medicine access indicators and measure the impact of interventions.</p>
        
        <p>7. Promote research on medicine access challenges and innovative solutions through partnerships with academic institutions.</p>
        
        <p>Improving access to medicines in Uganda requires a comprehensive, multi-sectoral approach that addresses the complex interplay of supply chain, financial, geographic, and human resource factors. Through coordinated efforts, innovative solutions, and sustained commitment, we can ensure that all Ugandans have access to the medicines they need to live healthy, productive lives.</p>`
    },
    'new-regulations': {
        title: 'New Regulations for Pharmaceutical Practice',
        author: 'Pharmacy News',
        date: 'May 5, 2025',
        image: 'images/pha.jpg',
        content: `<p>The National Drug Authority (NDA) has introduced comprehensive new regulations that will significantly impact pharmaceutical practice in Uganda. These regulations, which come into effect on July 1, 2025, aim to enhance patient safety, improve medication management, and align Uganda's pharmaceutical practices with international standards. This article provides a detailed overview of the new regulations and their implications for pharmacists, pharmacy technicians, and healthcare institutions.</p>
        
        <h2>Overview of the New Regulations</h2>
        <p>The new regulatory framework, officially titled the "Pharmaceutical Practice and Medication Safety Regulations 2025," represents the most comprehensive update to pharmaceutical regulations in over a decade. The regulations were developed through an extensive consultation process involving pharmacists, healthcare providers, regulatory bodies, and patient advocacy groups.</p>
        
        <p>Key areas addressed by the new regulations include:</p>
        <ul>
            <li>Expanded scope of practice for pharmacists</li>
            <li>Enhanced medication safety protocols</li>
            <li>Improved pharmacy facility standards</li>
            <li>Strengthened continuing professional development requirements</li>
            <li>Integration of digital health technologies</li>
            <li>Improved patient counseling and education standards</li>
        </ul>
        
        <h2>Expanded Scope of Practice</h2>
        <p>One of the most significant changes is the expansion of the pharmacist's scope of practice. Under the new regulations, pharmacists will be authorized to:</p>
        
        <p><strong>Initiate Treatment for Minor Ailments:</strong> Pharmacists can now initiate treatment for common minor conditions such as uncomplicated urinary tract infections, allergic rhinitis, and mild skin infections, following standardized protocols.</p>
        
        <p><strong>Administer Vaccinations:</strong> Pharmacists are authorized to administer certain vaccines, including influenza, pneumococcal, and tetanus vaccines, after completing appropriate training and certification.</p>
        
        <p><strong>Conduct Medication Therapy Management:</strong> Pharmacists can perform comprehensive medication reviews for patients with multiple chronic conditions, identify medication-related problems, and make recommendations to prescribers.</p>
        
        <p><strong>Order Laboratory Tests:</strong> In specific circumstances, pharmacists can order certain laboratory tests to monitor medication therapy, such as blood glucose levels for diabetes management and renal function tests for patients on nephrotoxic medications.</p>
        
        <p><strong>Adjust Medication Regimens:</strong> Pharmacists can make certain adjustments to medication regimens, such as dose modifications, under collaborative practice agreements with physicians.</p>
        
        <h2>Enhanced Medication Safety Protocols</h2>
        <p>The new regulations introduce comprehensive medication safety protocols to reduce medication errors and improve patient outcomes:</p>
        
        <p><strong>Barcode Medication Administration:</strong> All hospitals and health facilities with more than 50 beds must implement barcode medication administration systems by December 31, 2026. This system requires scanning both the patient's identification and the medication before administration.</p>
        
        <p><strong>High-Alert Medication Management:</strong> Enhanced protocols for high-alert medications, including insulin, anticoagulants, and opioids, require double-check procedures, specialized storage, and comprehensive documentation.</p>
        
        <p><strong>Medication Reconciliation:</strong> Pharmacists must conduct medication reconciliation for all patients at transitions of care, including hospital admission, transfer between units, and discharge.</p>
        
        <p><strong>Adverse Drug Reaction Reporting:</strong> The regulations establish a mandatory reporting system for serious adverse drug reactions, with pharmacists playing a key role in identification and reporting.</p>
        
        <p><strong>Look-Alike/Sound-Alike Medication Management:</strong> Specific storage and labeling requirements for look-alike/sound-alike medications to prevent dispensing errors.</p>
        
        <h2>Pharmacy Facility Standards</h2>
        <p>The new regulations establish updated standards for pharmacy facilities to ensure consistent quality across all practice settings:</p>
        
        <p><strong>Physical Infrastructure:</strong> Minimum space requirements, ventilation standards, and lighting specifications for pharmacy practice areas.</p>
        
        <p><strong>Equipment Requirements:</strong> Mandatory equipment including calibrated weighing scales, compounding tools, and temperature monitoring devices for medication storage.</p>
        
        <p><strong>Storage Conditions:</strong> Detailed requirements for temperature-controlled storage of medications, including regular monitoring and documentation.</p>
        
        <p><strong>Infection Control:</strong> Comprehensive infection control protocols for pharmacy practice areas, including hand hygiene, surface disinfection, and personal protective equipment.</p>
        
        <p><strong>Security Measures:</strong> Enhanced security requirements for controlled substances, including alarm systems, secure storage, and access control.</p>
        
        <h2>Continuing Professional Development</h2>
        <p>The regulations strengthen continuing professional development (CPD) requirements for pharmacists and pharmacy technicians:</p>
        
        <p><strong>CPD Hours:</strong> Pharmacists must complete 30 CPD hours annually, up from the previous requirement of 20 hours.</p>
        
        <p><strong>Specialized Training:</strong> Mandatory training in medication safety, high-alert medications, and new technological systems.</p>
        
        <p><strong>Assessment and Evaluation:</strong> Implementation of knowledge and skills assessments as part of the CPD process.</p>
        
        <p><strong>Documentation:</strong> Standardized documentation and reporting of CPD activities to the Pharmaceutical Society of Uganda.</p>
        
        <h2>Digital Health Integration</h2>
        <p>The regulations promote the integration of digital health technologies in pharmaceutical practice:</p>
        
        <p><strong>Electronic Prescribing:</strong> All public health facilities must implement electronic prescribing systems by December 31, 2027.</p>
        
        <p><strong>Electronic Health Records:</strong> Pharmacists must have access to patient electronic health records to support medication management.</p>
        
        <p><strong>Telepharmacy Services:</strong> Establishment of standards for telepharmacy services, including remote consultations and medication reviews.</p>
        
        <p><strong>Digital Medication Management Tools:</strong> Encouragement of digital tools for medication adherence monitoring, patient education, and clinical decision support.</p>
        
        <h2>Implementation Timeline</h2>
        <p>The new regulations will be implemented in phases to allow adequate preparation:</p>
        
        <ul>
            <li><strong>July 1, 2025:</strong> Regulations come into effect; training programs begin</li>
            <li><strong>January 1, 2026:</strong> Expanded scope of practice provisions take effect</li>
            <li><strong>July 1, 2026:</strong> Medication safety protocols fully implemented</li>
            <li><strong>December 31, 2026:</strong> Barcode medication administration required in large hospitals</li>
            <li><strong>December 31, 2027:</strong> Electronic prescribing required in public health facilities</li>
        </ul>
        
        <h2>Training and Support</h2>
        <p>The Pharmaceutical Society of Uganda, in collaboration with the National Drug Authority and academic institutions, has developed comprehensive training programs to support the implementation of the new regulations:</p>
        
        <p><strong>National Training Program:</strong> A nationwide training program will be conducted in all regions, covering all aspects of the new regulations.</p>
        
        <p><strong>Specialized Certification:</strong> Certification programs for pharmacists in areas such as vaccination administration and medication therapy management.</p>
        
        <p><strong>Resource Materials:</strong> Development of comprehensive resource materials, including practice guidelines, checklists, and educational tools.</p>
        
        <p><strong>Technical Support:</strong> Establishment of a technical support helpline and regional support teams to assist pharmacists with implementation challenges.</p>
        
        <h2>Implications for Practice</h2>
        <p>The new regulations will have significant implications for pharmaceutical practice in Uganda:</p>
        
        <p><strong>Enhanced Professional Role:</strong> Pharmacists will have an expanded clinical role, contributing more directly to patient care and health outcomes.</p>
        
        <p><strong>Increased Responsibility:</strong> With expanded scope of practice comes increased responsibility and accountability for patient outcomes.</p>
        
        <p><strong>Interprofessional Collaboration:</strong> The regulations promote closer collaboration between pharmacists and other healthcare providers.</p>
        
        <p><strong>Quality Improvement:</strong> Standardized protocols and enhanced safety measures will improve the quality and consistency of pharmaceutical services.</p>
        
        <p><strong>Professional Development:</strong> The strengthened CPD requirements will ensure that pharmacists maintain up-to-date knowledge and skills.</p>
        
        <p><strong>Technology Adoption:</strong> Integration of digital health technologies will modernize pharmaceutical practice and improve efficiency.</p>
        
        <h2>Challenges and Considerations</h2>
        <p>While the new regulations represent significant progress, several challenges must be addressed:</p>
        
        <p><strong>Resource Requirements:</strong> Implementation will require investment in technology, equipment, and training.</p>
        
        <p><strong>Workforce Capacity:</strong> There may be a need for additional pharmacists to handle the expanded scope of practice.</p>
        
        <p><strong>Equity of Implementation:</strong> Ensuring consistent implementation across urban and rural settings with varying resource levels.</p>
        
        <p><strong>Monitoring and Evaluation:</strong> Establishing robust systems to monitor compliance and measure the impact of the regulations.</p>
        
        <p><strong>Stakeholder Engagement:</strong> Ongoing engagement with all stakeholders to address implementation challenges and ensure buy-in.</p>
        
        <p>The new pharmaceutical practice regulations represent a transformative step forward for the pharmacy profession in Uganda. By expanding the scope of practice, enhancing medication safety, and promoting the integration of technology, these regulations position pharmacists to play a more central role in the healthcare system. With proper implementation, support, and ongoing evaluation, these regulations have the potential to significantly improve medication management and patient outcomes across the country.</p>`
    },
    'digital-transformation': {
        title: 'Digital Transformation in Pharmacy',
        author: 'Pharmacy News',
        date: 'April 30, 2025',
        image: 'images/pha2.jpg',
        content: `<p>The digital transformation of pharmacy practice in Uganda is accelerating at an unprecedented pace, revolutionizing how medications are managed, dispensed, and monitored. This article explores the current landscape of digital health in pharmacy, examines key technologies driving this transformation, and discusses the implications for pharmacists, patients, and the healthcare system as a whole.</p>
        
        <h2>The Digital Health Landscape in Uganda</h2>
        <p>Uganda has made significant progress in digital health infrastructure in recent years, creating a favorable environment for the digital transformation of pharmacy practice. Key developments include:</p>
        
        <ul>
            <li>98% mobile network coverage nationwide</li>
            <li>Over 25 million smartphone users</li>
            <li>Government investment in national health information systems</li>
            <li>Establishment of the National Digital Health Strategy</li>
            <li>Growing ecosystem of health technology startups</li>
        </ul>
        
        <p>These developments have created opportunities for innovative digital solutions in pharmacy practice, from mobile applications for medication management to artificial intelligence-powered clinical decision support systems.</p>
        
        <h2>Key Digital Technologies in Pharmacy</h2>
        <p><strong>Electronic Prescribing Systems:</strong> Electronic prescribing (e-prescribing) systems are being increasingly adopted in hospitals and clinics across Uganda. These systems eliminate handwritten prescriptions, reduce medication errors, and enable real-time drug interaction checking. The National Drug Authority reports that over 60% of public hospitals in urban areas have implemented e-prescribing systems.</p>
        
        <p><strong>Pharmacy Management Software:</strong> Comprehensive pharmacy management software solutions are transforming how pharmacies operate. These systems handle inventory management, billing, patient records, and reporting, improving efficiency and reducing errors. Cloud-based solutions allow for real-time data access and remote management.</p>
        
        <p><strong>Mobile Health Applications:</strong> mHealth applications are playing a crucial role in medication adherence and patient engagement. Applications that send medication reminders, track symptoms, and provide educational content are helping patients manage chronic conditions more effectively.</p>
        
        <p><strong>Telepharmacy Services:</strong> Telepharmacy is expanding access to pharmaceutical services, particularly in rural and underserved areas. Remote consultations, virtual medication reviews, and digital prescription verification are becoming increasingly common.</p>
        
        <p><strong>Artificial Intelligence and Machine Learning:</strong> AI-powered systems are being developed to support clinical decision-making, predict medication adherence patterns, and identify potential adverse drug reactions. These technologies analyze large datasets to provide personalized recommendations for medication management.</p>
        
        <p><strong>Blockchain Technology:</strong> Blockchain is being explored for medication traceability and supply chain management. This technology can provide a secure, transparent record of a medication's journey from manufacturer to patient, helping to combat counterfeit medicines.</p>
        
        <p><strong>Internet of Things (IoT) Devices:</strong> Smart pill dispensers, connected inhalers, and wearable devices are providing real-time data on medication use and patient health status. This data can be shared with pharmacists to support medication management and intervention when needed.</p>
        
        <h2>Benefits of Digital Transformation</h2>
        <p><strong>Improved Patient Safety:</strong> Digital systems reduce medication errors through automated checks for drug interactions, allergies, and dosage appropriateness. Real-time access to patient medication histories enables more informed decision-making.</p>
        
        <p><strong>Enhanced Medication Adherence:</strong> Digital tools such as medication reminder apps, smart packaging, and automated refill systems are helping patients adhere to their medication regimens. Studies show that digital interventions can improve adherence rates by 20-30%.</p>
        
        <p><strong>Increased Efficiency:</strong> Automation of routine tasks such as inventory management, billing, and prescription processing frees up pharmacists' time for clinical services and patient counseling.</p>
        
        <p><strong>Expanded Access to Care:</strong> Telepharmacy and mobile health applications are extending pharmaceutical services to remote and underserved populations, reducing geographic barriers to care.</p>
        
        <p><strong>Better Data for Decision-Making:</strong> Digital systems generate valuable data on medication use patterns, patient outcomes, and healthcare utilization. This data can inform public health initiatives, research, and policy development.</p>
        
        <p><strong>Personalized Medicine:</strong> Digital technologies enable more personalized approaches to medication management, taking into account individual patient characteristics, preferences, and response patterns.</p>
        
        <h2>Case Studies of Digital Innovation</h2>
        <p><strong>MedTrack Uganda:</strong> A mobile application that helps patients manage their medications through personalized reminders, educational content, and direct communication with pharmacists. The app has over 50,000 users and has demonstrated a 25% improvement in medication adherence among users with chronic conditions.</p>
        
        <p><strong>PharmaChain:</strong> A blockchain-based platform for medication traceability that allows patients and healthcare providers to verify the authenticity of medications by scanning a QR code. The platform has been implemented in 200 pharmacies and has reduced the incidence of counterfeit medicines by 40% in participating facilities.</p>
        
        <p><strong>TelPharm Uganda:</strong> A telepharmacy service that connects rural health centers with pharmacists in urban centers. The service provides remote medication reviews, prescription verification, and clinical consultations, serving over 10,000 patients in remote areas.</p>
        
        <p><strong>SmartInventory:</strong> An AI-powered inventory management system that uses predictive analytics to optimize medication stock levels, reduce waste from expired medications, and prevent stockouts. Hospitals using the system have reported a 30% reduction in medication waste and a 50% reduction in stockouts.</p>
        
        <h2>Challenges and Barriers</h2>
        <p>Despite the significant potential of digital transformation, several challenges must be addressed:</p>
        
        <p><strong>Digital Divide:</strong> Limited internet connectivity and smartphone ownership in rural areas create disparities in access to digital health services.</p>
        
        <p><strong>Data Privacy and Security:</strong> Protecting sensitive patient health information in digital systems requires robust security measures and compliance with data protection regulations.</p>
        
        <p><strong>Interoperability:</strong> Different digital systems often cannot communicate with each other, creating data silos and limiting the potential benefits of digital health.</p>
        
        <p><strong>Cost of Implementation:</strong> The initial investment in digital infrastructure and ongoing maintenance costs can be prohibitive for some pharmacies and health facilities.</p>
        
        <p><strong>Change Management:</strong> Transitioning to digital systems requires significant changes in workflows, skills, and mindsets, which can be challenging for healthcare providers.</p>
        
        <p><strong>Regulatory Framework:</strong> The regulatory environment for digital health technologies is still evolving, creating uncertainty for innovators and healthcare providers.</p>
        
        <p><strong>Digital Literacy:</strong> Both healthcare providers and patients need adequate digital skills to effectively use digital health technologies.</p>
        
        <h2>Strategies for Successful Implementation</h2>
        <p><strong>Phased Implementation:</strong> Adopting digital technologies in phases allows organizations to manage change effectively, address challenges, and build capacity gradually.</p>
        
        <p><strong>Stakeholder Engagement:</strong> Involving all stakeholders, including pharmacists, patients, IT staff, and administrators, in the planning and implementation process ensures buy-in and addresses diverse needs and concerns.</p>
        
        <p><strong>Comprehensive Training:</strong> Providing thorough training and ongoing support for healthcare providers using digital systems is critical for successful adoption.</p>
        
        <p><strong>Focus on User Experience:</strong> Designing digital solutions with a focus on usability and user experience increases adoption rates and satisfaction.</p>
        
        <p><strong>Data Governance:</strong> Establishing clear policies and procedures for data management, privacy, and security builds trust and ensures compliance with regulations.</p>
        
        <p><strong>Integration with Existing Systems:</strong> Ensuring that new digital solutions can integrate with existing health information systems maximizes their value and minimizes disruption.</p>
        
        <p><strong>Evaluation and Optimization:</strong> Continuously monitoring the impact of digital technologies and making adjustments based on feedback and data allows for ongoing improvement.</p>
        
        <h2>The Future of Digital Pharmacy</h2>
        <p>Looking ahead, several trends are likely to shape the future of digital pharmacy in Uganda:</p>
        
        <p><strong>Artificial Intelligence Integration:</strong> AI will play an increasingly important role in clinical decision support, medication optimization, and predictive analytics for patient outcomes.</p>
        
        <p><strong>Personalized Digital Therapeutics:</strong> Digital interventions tailored to individual patient characteristics, preferences, and response patterns will become more common.</p>
        
        <p><strong>Expanded Use of Wearables:</strong> Integration of data from wearable devices into medication management will enable more proactive and personalized care.</p>
        
        <p><strong>Blockchain for Supply Chain:</strong> Wider adoption of blockchain technology for medication traceability and supply chain transparency will enhance medication safety.</p>
        
        <p><strong>Virtual Reality Training:</strong> VR and AR technologies will be used for immersive training of pharmacists and pharmacy technicians.</p>
        
        <p><strong>Integrated Digital Health Platforms:</strong> Comprehensive platforms that integrate various digital health tools and data sources will provide a holistic view of patient health and medication use.</p>
        
        <p><strong>Population Health Management:</strong> Digital tools will enable pharmacists to play a larger role in population health management, identifying at-risk populations and implementing preventive interventions.</p>
        
        <h2>Recommendations for Stakeholders</h2>
        <p><strong>For Pharmacists:</strong> Embrace digital technologies as tools to enhance patient care, invest in digital literacy, and participate in the design and implementation of digital solutions.</p>
        
        <p><strong>For Pharmacy Schools:</strong> Integrate digital health competencies into the pharmacy curriculum, including data literacy, digital therapeutics, and health informatics.</p>
        
        <p><strong>For Regulatory Bodies:</strong> Develop clear regulatory frameworks for digital health technologies, establish standards for data interoperability, and create pathways for innovation while ensuring patient safety.</p>
        
        <p><strong>For Healthcare Institutions:</strong> Develop digital transformation strategies, invest in digital infrastructure, and create supportive environments for innovation and change management.</p>
        
        <p><strong>For Technology Developers:</strong> Design user-centered solutions that address real clinical needs, prioritize data privacy and security, and ensure accessibility for diverse user populations.</p>
        
        <p><strong>For Policymakers:</strong> Support digital health initiatives through funding, policy development, and infrastructure investment, with a focus on equity and inclusion.</p>
        
        <p>The digital transformation of pharmacy practice in Uganda represents a paradigm shift in how pharmaceutical care is delivered. By harnessing the power of technology, pharmacists can enhance patient safety, improve medication adherence, expand access to care, and contribute more effectively to health outcomes. While challenges remain, the potential benefits are substantial. With strategic planning, collaboration, and investment, Uganda can position itself as a leader in digital pharmacy innovation in the region, ultimately improving healthcare for all its citizens.</p>`
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Set up slideshow intervals
    setupSlideshow('kiiupsa-slideshow');
    setupSlideshow('mupsa-slideshow');
    setupSlideshow('mbupsa-slideshow');
    
    // Initialize event listeners
    initEventListeners();
});

// Initialize all event listeners
function initEventListeners() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page') || this.parentElement.getAttribute('data-page');
            if (page) {
                navigateTo(page);
            }
        });
    });
    
    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Check if elements exist before adding event listener
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.toggle('show');
            
            // Change the icon from bars to times when open
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('show')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('#mobile-menu .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuToggle = document.getElementById('menu-toggle');
            const icon = menuToggle?.querySelector('i');
            
            if (mobileMenu && menuToggle && icon) {
                mobileMenu.classList.remove('show');
                icon.className = 'fas fa-bars';
            }
        });
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleDarkMode);
    
    // Gallery tabs
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            galleryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            // Show/hide galleries
            const galleryType = this.getAttribute('data-gallery');
            document.querySelector('.camp-gallery').classList.toggle('hidden', galleryType !== 'camp');
            document.querySelector('.symposium-gallery').classList.toggle('hidden', galleryType !== 'symposium');
            currentGallery = galleryType;
        });
    });
    
    // News tabs
    const newsTabs = document.querySelectorAll('.news-tab');
    newsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            newsTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            // Hide all article grids
            document.querySelectorAll('.article-grid').forEach(grid => {
                grid.classList.add('hidden');
            });
            // Show selected grid
            const tabType = this.getAttribute('data-tab');
            document.querySelector(`.${tabType}-articles`).classList.remove('hidden');
        });
    });
    
    // Gallery items (for lightbox)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            openLightbox(index);
        });
    });
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);
    
    // Close lightbox on click outside image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });
    
    // Add click event listeners to article cards
    document.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent the event from triggering if clicking on links
            if (e.target.tagName === 'A') {
                return;
            }
            
            const articleId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            viewArticle(articleId);
        });
    });
    
    // Add click event listeners to read more links
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const articleId = this.closest('.article-card').getAttribute('onclick').match(/'([^']+)'/)[1];
            viewArticle(articleId);
        });
    });
}

// Navigation function
function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(page).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Close mobile menu if open
    if (menuOpen) {
        document.getElementById('mobile-menu').classList.remove('show');
        menuOpen = false;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// View article function
function viewArticle(articleId) {
    const article = articles[articleId];
    if (!article) return;
    
    // Update article content
    document.getElementById('article-title').textContent = article.title;
    document.querySelector('.author-name').textContent = `By ${article.author}`;
    document.querySelector('.author-date').textContent = article.date;
    document.getElementById('article-content').innerHTML = article.content;
    document.querySelector('.article-main-image').src = article.image;
    
    // Navigate to article page
    navigateTo('article');
    
    // Store current article
    currentArticle = articleId;
}

// Dark mode toggle
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark');
    const icon = document.querySelector('.theme-icon');
    if (darkMode) {
        icon.className = 'fas fa-sun theme-icon';
    } else {
        icon.className = 'fas fa-moon theme-icon';
    }
}

// Slideshow functionality
function setupSlideshow(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const images = container.querySelectorAll('.slideshow-image');
    let currentIndex = 0;
    
    setInterval(() => {
        // Hide current image
        images[currentIndex].classList.remove('active');
        
        // Update index
        currentIndex = (currentIndex + 1) % images.length;
        
        // Show next image
        images[currentIndex].classList.add('active');
    }, 3000);
}

// Lightbox functionality
function openLightbox(index) {
    lightboxIndex = index;
    lightboxImg.src = galleryImages[index];
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function nextImage() {
    lightboxIndex = (lightboxIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[lightboxIndex];
}

function prevImage() {
    lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[lightboxIndex];
}

// === Contact Form Validation & Submission (Formspree) ===
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('successMessage');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => {
      el.classList.remove('active');
      el.style.display = 'none';
    });

    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (!fullName.value.trim()) {
      showError('nameError', 'Full name is required.');
      isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError('emailError', 'Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      showError('emailError', 'Enter a valid email address.');
      isValid = false;
    }

    // Validate Reason
    const reason = document.getElementById('reason');
    if (!reason.value.trim()) {
      showError('reasonError', 'Please tell us your reason for contacting.');
      isValid = false;
    }

    // Validate WhatsApp - Accepts all international numbers
const whatsapp = document.getElementById('whatsapp');
const phoneRegex = /^\+?[1-9]\d{0,3}[\s\-]?\d{3,14}$/;

if (!whatsapp.value.trim()) {
  showError('whatsappError', 'WhatsApp number is required.');
  isValid = false;
} else if (!phoneRegex.test(whatsapp.value.trim().replace(/[\s\-]/g, ''))) {
  // Extra safety: remove spaces/dashes and check it's still a valid number
  const cleaned = whatsapp.value.trim().replace(/[^+\d]/g, '');
  if (!/^\+\d{5,15}$/.test(cleaned)) {
    showError('whatsappError', 'Please enter a valid phone number (e.g., +256 700 123 456).');
    isValid = false;
  }
}

    // If valid, submit and show success
    if (isValid) {
      // Hide form, show success
      form.style.display = 'none';
      successMessage.style.display = 'block';

      // Submit to Formspree
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          console.log("Form submitted successfully");
        } else {
          alert("Oops! Something went wrong. Please try again.");
          form.style.display = 'block';
          successMessage.style.display = 'none';
        }
      }).catch(error => {
        alert("Network error. Please try again.");
        form.style.display = 'block';
        successMessage.style.display = 'none';
      });
    }
  });

  function showError(id, message) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = message;
      el.classList.add('active');
      el.style.display = 'block';
    }
  }
});// === Dynamic Cabinet Year Selector ===
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('cabinet-year');
  const cabinetGrid = document.querySelector('.cabinet-grid');

  // ✅ Cabinet Data: Easy to update with new members
  // Add new years and members here when available
  const cabinetData = {
    '2025-2026': [
      {
        name: 'Precious Gracious Ocen',
        role: 'President',
        image: 'images/president.jpg',
        bio: 'Leads the association, represents UPSA in official capacities, and oversees strategic direction.',
        whatsapp: '256784915546'
      },
      {
        name: 'Katiito Samantha Penninah',
        role: 'Vice President',
        image: 'images/vp.jpg',
        bio: 'Assists the President, assumes leadership in their absence, and coordinates internal affairs.',
        whatsapp: '256759563570'
      },
      {
        name: 'Namanya Kauthar',
        role: 'General Secretary',
        image: 'images/gen sec.jpg',
        bio: 'Manages official records, correspondence, and ensures proper implementation of decisions.',
        whatsapp: '256786920591'
      },
      {
        name: 'Lubega Joel Collins',
        role: 'Organizing Secretary',
        image: 'images/org sec.jpg',
        bio: 'Coordinates events, meetings, and logistical arrangements for association activities.',
        whatsapp: '256757323816'
      },
      {
        name: 'Aryek Joshua',
        role: 'ICT Chairperson',
        image: 'images/ict.jpg',
        bio: 'Oversees digital operations, website management, and communication technology.',
        whatsapp: '256776717340'
      },
      {
        name: 'Katugume Royce',
        role: 'Finance Secretary',
        image: 'images/finance.jpg',
        bio: 'Manages financial resources, prepares budgets, and ensures proper financial reporting.',
        whatsapp: '256771968906'
      },
      {
        name: 'Mugerwa Eric',
        role: 'PRO',
        image: 'images/pro.jpg',
        bio: 'Manages public relations, media communication, and external partnerships.',
        whatsapp: '256758876133'
      },
      {
        name: 'Nantongo Diana Gorret',
        role: 'University Coordinator - MUK',
        image: 'images/muk.jpg',
        bio: 'Coordinates activities among MUPSA students and liaises with national leadership.',
        whatsapp: '256760462634'
      },
      {
        name: 'Kakande Sharifah',
        role: 'University Coordinator - KIU',
        image: 'https://picsum.photos/seed/kc/300/400',
        bio: 'Coordinates activities among KIUPSA students and liaises with national leadership.',
        whatsapp: '1234567890'
      },
      {
        name: 'Kigenyi Innocent',
        role: 'University Coordinator - MUST',
        image: 'images/mbu.jpg',
        bio: 'Coordinates activities among MBUPSA students and liaises with national leadership.',
        whatsapp: '256769092962'
      }
    ]
    // Add future years here when available
    // '2026-2027': [ ... ]
  };

  // Render cabinet members or TBA cards
  function renderCabinet(year) {
    const members = cabinetData[year] || null;

    if (!members) {
      // Show multiple TBA cards for all positions
      cabinetGrid.innerHTML = `
        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">President</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">Vice President</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">General Secretary</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">Organizing Secretary</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">Finance Secretary</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">PRO</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">ICT Chairperson</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">University Coordinator</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">University Coordinator</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>

        <div class="cabinet-card tba-card">
          <div class="cabinet-image">
            <img src="images/tba.jpg" alt="TBA">
            <div class="cabinet-overlay">
              <h3 class="cabinet-name">TBA</h3>
              <p class="cabinet-position">University Coordinator</p>
            </div>
          </div>
          <div class="cabinet-info">
            <p class="cabinet-role">The cabinet member for this position has not yet been announced.</p>
          </div>
        </div>
      `;
      return;
    }

    // Render real cabinet members
    cabinetGrid.innerHTML = members.map(member => `
      <div class="cabinet-card">
        <div class="cabinet-image">
          <img src="${member.image}" alt="${member.name}">
          <div class="cabinet-overlay">
            <h3 class="cabinet-name">${member.name}</h3>
            <p class="cabinet-position">${member.role}</p>
          </div>
        </div>
        <div class="cabinet-info">
          <p class="cabinet-role">${member.bio}</p>
          <a href="https://wa.me/${member.whatsapp}" target="_blank" class="whatsapp-link">
            <i class="fab fa-whatsapp"></i> Contact via WhatsApp
          </a>
        </div>
      </div>
    `).join('');
  }

  // Initial load
  renderCabinet('2025-2026');

  // Update on dropdown change
  dropdown.addEventListener('change', function () {
    renderCabinet(this.value);
  });
});