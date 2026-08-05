const COMMON = {
  es: {
    'nav.work':'Proyectos','nav.process':'Proceso','nav.demo':'Demo','nav.path':'Trayectoria','nav.contact':'Contacto',
    'hero.eyebrow':'Business Intelligence & Data Analyst · Panamá','hero.name':'Josué González','hero.role':'Power BI · SQL · Databricks · Excel',
    'hero.lede':'Transformo datos financieros y operativos en dashboards, procesos automatizados y análisis confiables que ayudan a tomar mejores decisiones.',
    'hero.projects':'Ver proyectos','hero.cv':'Descargar CV','hero.linkedin':'LinkedIn','hero.availability':'Abierto a roles de BI y analítica en Panamá o remotos',
    'metrics.regions':'regiones validadas en reportería global','metrics.views':'vistas en un dashboard financiero','metrics.hours':'horas semanales recuperadas','metrics.efficiency':'mejora en eficiencia operativa',
    'work.kicker':'Trabajo seleccionado','work.title':'Casos que muestran cómo pienso y construyo','work.sub':'Cada caso explica el problema, la arquitectura, las decisiones técnicas y el resultado. Los datos internos han sido recreados o anonimizados.',
    'project.1.index':'Caso 01 · BI financiero','project.1.title':'Dashboard financiero global','project.1.desc':'Modelo de reportería para analizar ventas, contribución y desempeño a través de múltiples regiones, canales y marcas.','project.1.stat':'vistas dentro de una solución ejecutiva','project.1.cta':'Ver caso de estudio',
    'project.2.index':'Caso 02 · Ingeniería de datos','project.2.title':'Migración de Power Query a Databricks','project.2.desc':'Rediseño del flujo de transformación para mover procesos de millones de filas desde Power Query hacia SQL y PySpark.','project.2.stat':'filas procesadas con una arquitectura escalable','project.2.cta':'Ver caso de estudio',
    'project.3.index':'Caso 03 · Automatización','project.3.title':'Sistema operacional en Excel y VBA','project.3.desc':'Dashboard, ETL y prototipo de base de datos para reemplazar registros dispersos y tareas manuales en una operación de salud.','project.3.stat':'horas semanales devueltas al equipo','project.3.cta':'Ver caso de estudio',
    'process.kicker':'Forma de trabajo','process.title':'De una pregunta de negocio a una solución confiable','process.sub':'Mi trabajo no termina en visualizar datos; primero hay que entender, validar y diseñar una base que pueda sostener la decisión.',
    'process.1.title':'Entender','process.1.desc':'Defino la pregunta, el usuario, el KPI y qué decisión debe habilitar el análisis.',
    'process.2.title':'Auditar','process.2.desc':'Reviso fuentes, granularidad, duplicados, jerarquías y reglas de negocio antes de modelar.',
    'process.3.title':'Construir','process.3.desc':'Diseño transformaciones, modelo semántico, medidas y visualizaciones con foco en escalabilidad.',
    'process.4.title':'Validar','process.4.desc':'Reconcilio totales contra el source of truth y documento supuestos, excepciones y resultados.',
    'demo.kicker':'Demo interactiva','demo.title':'Explora una recreación del dashboard','demo.sub':'Los datos son sintéticos. Cambia de región para ver cómo varían los KPIs y la composición comercial.','demo.report':'Global Account Performance','demo.note':'Datos ficticios. Ninguna cifra proviene de un cliente real.',
    'path.kicker':'Experiencia','path.title':'Trayectoria profesional','path.sub':'La combinación de operaciones, finanzas y datos me permite entender tanto el proceso como la solución técnica.',
    'path.1.date':'Nov 2025 · Actual','path.1.role':'Business Intelligence / Data Analyst','path.1.company':'Estée Lauder Companies','path.1.desc':'Reportería financiera global, dashboards de FP&A, Databricks, calidad de datos y presentaciones ejecutivas.',
    'path.2.date':'Jul 2022 · Nov 2025','path.2.role':'Pre-Billing Specialist','path.2.company':'Insignia Resources','path.2.desc':'Validación de datos operativos, automatización en Excel y construcción de dashboards y herramientas VBA.',
    'path.3.date':'Sep 2019 · Jul 2022','path.3.role':'Collection Specialist','path.3.company':'Connect International','path.3.desc':'Reportería diaria, análisis de cuentas, procesamiento de pagos e integridad de datos financieros.',
    'stack.title':'Stack principal','stack.bi':'Visualización y BI','stack.data':'Datos y transformación','stack.ops':'Automatización y negocio','stack.edu':'Formación',
    'contact.kicker':'Hablemos','contact.title':'Datos claros. Decisiones mejores.','contact.desc':'Estoy abierto a conversaciones sobre posiciones de Business Intelligence y Data Analytics, especialmente en entornos financieros, comerciales u operativos.','contact.mail':'Correo','contact.cv':'CV en PDF','footer':'Hecho con HTML, CSS y JavaScript · Datos de demostración sintéticos'
  },
  en: {
    'nav.work':'Work','nav.process':'Process','nav.demo':'Demo','nav.path':'Experience','nav.contact':'Contact',
    'hero.eyebrow':'Business Intelligence & Data Analyst · Panama','hero.name':'Josue Gonzalez','hero.role':'Power BI · SQL · Databricks · Excel',
    'hero.lede':'I turn financial and operational data into dashboards, automated workflows and trustworthy analysis that help teams make better decisions.',
    'hero.projects':'View projects','hero.cv':'Download resume','hero.linkedin':'LinkedIn','hero.availability':'Open to BI and analytics roles in Panama or remote',
    'metrics.regions':'regions validated in global reporting','metrics.views':'views in a financial dashboard','metrics.hours':'weekly hours returned to the team','metrics.efficiency':'improvement in operational efficiency',
    'work.kicker':'Selected work','work.title':'Cases that show how I think and build','work.sub':'Each case explains the problem, architecture, technical decisions and result. Internal data has been recreated or anonymized.',
    'project.1.index':'Case 01 · Financial BI','project.1.title':'Global financial dashboard','project.1.desc':'Reporting model to analyze sales, contribution and performance across multiple regions, channels and brands.','project.1.stat':'views inside an executive solution','project.1.cta':'View case study',
    'project.2.index':'Case 02 · Data engineering','project.2.title':'Power Query to Databricks migration','project.2.desc':'Redesign of a transformation flow to move multi-million-row processing from Power Query into SQL and PySpark.','project.2.stat':'rows processed through a scalable architecture','project.2.cta':'View case study',
    'project.3.index':'Case 03 · Automation','project.3.title':'Operational Excel and VBA system','project.3.desc':'Dashboard, ETL and database prototype replacing scattered records and manual tasks in a healthcare operation.','project.3.stat':'weekly hours returned to the team','project.3.cta':'View case study',
    'process.kicker':'How I work','process.title':'From a business question to a trustworthy solution','process.sub':'My work does not end at visualization; the data has to be understood, audited and designed to support the decision.',
    'process.1.title':'Understand','process.1.desc':'Define the question, user, KPI and the decision the analysis should enable.',
    'process.2.title':'Audit','process.2.desc':'Review sources, grain, duplicates, hierarchies and business rules before modeling.',
    'process.3.title':'Build','process.3.desc':'Design transformations, semantic models, measures and visuals with scalability in mind.',
    'process.4.title':'Validate','process.4.desc':'Reconcile totals against the source of truth and document assumptions, exceptions and outcomes.',
    'demo.kicker':'Interactive demo','demo.title':'Explore a dashboard recreation','demo.sub':'The data is synthetic. Switch regions to see how KPIs and commercial composition change.','demo.report':'Global Account Performance','demo.note':'Dummy data. No figure comes from a real client.',
    'path.kicker':'Experience','path.title':'Professional path','path.sub':'My background across operations, finance and data helps me understand both the business process and the technical solution.',
    'path.1.date':'Nov 2025 · Present','path.1.role':'Business Intelligence / Data Analyst','path.1.company':'Estée Lauder Companies','path.1.desc':'Global financial reporting, FP&A dashboards, Databricks, data quality and executive presentations.',
    'path.2.date':'Jul 2022 · Nov 2025','path.2.role':'Pre-Billing Specialist','path.2.company':'Insignia Resources','path.2.desc':'Operational data validation, Excel automation and development of dashboards and VBA tools.',
    'path.3.date':'Sep 2019 · Jul 2022','path.3.role':'Collection Specialist','path.3.company':'Connect International','path.3.desc':'Daily reporting, account analysis, payment processing and financial data integrity.',
    'stack.title':'Core stack','stack.bi':'Visualization and BI','stack.data':'Data and transformation','stack.ops':'Automation and business','stack.edu':'Education',
    'contact.kicker':'Let’s talk','contact.title':'Clear data. Better decisions.','contact.desc':'I am open to Business Intelligence and Data Analytics opportunities, especially in financial, commercial or operational environments.','contact.mail':'Email','contact.cv':'Resume PDF','footer':'Built with HTML, CSS and JavaScript · Synthetic demo data'
  }
};

let currentLang = 'es';
try { currentLang = localStorage.getItem('jg-lang') || 'es'; } catch (_) { currentLang = 'es'; }
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function mergedDictionary(lang){
  const page = window.PAGE_I18N?.[lang] || {};
  return {...COMMON[lang], ...page};
}
function setLanguage(lang){
  currentLang = lang;
  try { localStorage.setItem('jg-lang', lang); } catch (_) {}
  document.documentElement.lang = lang;
  const dict = mergedDictionary(lang);
  $$('[data-i18n]').forEach(el => {
    const value = dict[el.dataset.i18n];
    if(value !== undefined) el.textContent = value;
  });
  $$('[data-lang]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
  $$('[data-cv-link]').forEach(a => a.href = lang === 'es' ? '../cv/Josue_Gonzalez_CV_ES.pdf' : '../cv/Josue_Gonzalez_CV_EN.pdf');
  $$('[data-cv-home]').forEach(a => a.href = lang === 'es' ? 'cv/Josue_Gonzalez_CV_ES.pdf' : 'cv/Josue_Gonzalez_CV_EN.pdf');
  document.title = lang === 'es' ? (document.body.dataset.titleEs || 'Josué González — Business Intelligence & Data Analyst') : (document.body.dataset.titleEn || 'Josue Gonzalez — Business Intelligence & Data Analyst');
  document.dispatchEvent(new CustomEvent('languagechange',{detail:{lang}}));
}

$$('[data-lang]').forEach(btn => btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
const menu = $('[data-mobile-menu]');
if(menu){ menu.addEventListener('click',()=>{ const nav=$('.nav-links'); const open=nav.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); }); }
$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>$('.nav-links')?.classList.remove('open')));

const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1}) : null;
$$('.reveal').forEach(el=>io ? io.observe(el) : el.classList.add('in'));
setLanguage(currentLang);
