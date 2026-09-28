<a href="https://govtechbuilders.me">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.svg">
    <img alt="Rooney Odhiambo — Founder, full-stack engineer, GovTech Builders KE. Coding for transparency and accountability." src="assets/banner-light.svg" width="100%">
  </picture>
</a>

<p align="center">
  <a href="https://govtechbuilders.me"><img alt="Website: govtechbuilders.me" src="https://img.shields.io/badge/govtechbuilders.me-0B1220?style=for-the-badge&logo=googlechrome&logoColor=34D399"></a>
  <a href="https://veribid.app"><img alt="VeriBid: veribid.app" src="https://img.shields.io/badge/veribid.app-0B1220?style=for-the-badge&logo=vercel&logoColor=F5B83D"></a>
  <img alt="Based in Kenya" src="https://img.shields.io/badge/Kenya-0B1220?style=for-the-badge&logo=googlemaps&logoColor=white">
</p>

<br>

I build software for the places where trust breaks down: **public tenders, savings groups, school records and climate payouts.** Most of what I ship shares the same DNA: an append-only, hash-chained audit trail, M-Pesa as the payment rail, offline-first clients for patchy networks, and a human in the loop wherever money moves.

- 🏛️ **CEO, [GovTech Builders KE](https://govtechbuilders.me)**: civic and procurement technology for Kenya
- 📊 **Microsoft Certified: Fabric Data Engineer Associate (DP-700)** ([Verify Credential ↗](https://learn.microsoft.com/users/me/credentials) · ID `54D84D9DA7A2F082`)
- 🚀 **Founder, [VeriBid](https://veribid.app)**: B2B e-procurement with sealed bids and a verifiable audit chain
- 🔭 **Now:** building enterprise Fabric Lakehouses for D365 ERP, shipping DigiShule (EduOne) and testing BlueProof


<br>

## ◆ Featured work

<table>
<tr>
<td colspan="2" width="100%" valign="top">

### ⚡ Microsoft Fabric Medallion Lakehouse for Dynamics 365 ERP &nbsp;<sub>`Data Engineering` · `Production`</sub>
**Enterprise Lakehouse for ERP reporting.** Connects Dynamics 365 / Dataverse to Microsoft Fabric OneLake with zero-copy shortcuts. Ingests raw Delta tables into Bronze, uses PySpark to decode cryptic option sets, standardizes EAT timezones and currencies into Silver, and curates a Gold dimensional star schema (`FactSales`, `FactGeneralLedger`, `DimCustomer`, `DimDate`) with Delta Z-Ordering. Powers executive Power BI reporting in **Direct Lake Mode** with sub-second queries and zero refresh timeouts.

<sub>Microsoft Fabric · OneLake · PySpark · Delta Lake · Power BI Direct Lake · KQL Eventhouse</sub><br>
<a href="https://github.com/KabuorJnr/fabric-d365-medallion-lakehouse">Repository ↗</a>

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🧾 VeriBid &nbsp;<sub>`SaaS` · `Live`</sub>
**Verified procurement, trusted results.** Contractors submit bids that are encrypted with AES-256 and can't be opened before the tender closes. Every action is written to a SHA-256 chained log that MySQL triggers protect from edits. Four RBAC roles, from company admin to read-only auditor, plus Power BI Embedded analytics.

<sub>Next.js 14 · TypeScript · Laravel 11 · MySQL · Power BI</sub><br>
<a href="https://veribid.app">veribid.app ↗</a> &nbsp;·&nbsp; 🔒 private repo

</td>
<td width="50%" valign="top">

### 🌿 BlueProof &nbsp;<sub>`Climate` · `Pre-pilot`</sub>
**Cheap proof for mangrove restoration.** A community monitor photographs a plot. A vision model answers a few bounded questions about it, and a deterministic gate checks GPS, duplicate photos and payout frequency. When every check passes, the monitor gets paid over M-Pesa B2C. When one fails, a person reviews the photo. Sentinel-2 NDVI backs this up at hectare scale. The full design is written up in a paper.

<sub>Python · Vision LLM · Sentinel-2 · M-Pesa B2C · Hash-chained ledger</sub><br>
<a href="https://github.com/KabuorJnr/BlueProof">Repository ↗</a>

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🎓 DigiShule / EduOne &nbsp;<sub>`EdTech` · `Active`</sub>
**Offline-first school management.** Separate portals for the principal, registrar, finance, teachers, students and parents. Covers attendance, CBC-aligned grading with PDF report cards, fees, discipline and SMS notices. It's a PWA with IndexedDB caching and background sync, running on Supabase with strict Row Level Security. Ships as an Android app.

<sub>React · Vite · Supabase · PostgreSQL RLS · Capacitor</sub><br>
<a href="https://edu1app.tech">Website ↗</a>

</td>
<td width="50%" valign="top">

### 🔵 ChamaOne &nbsp;<sub>`Fintech` · `Mobile`</sub>
**A Chama manager built so money disputes don't end the group.** Contributions come in by M-Pesa STK push and reconcile automatically. Members vote on loans inside the app, meetings run with digital motions and Jitsi links, and every entry lands in a tamper-evident ledger. Built on the same native shell as EduOne and packaged as an Android APK.

<sub>React · Capacitor 8 · Supabase · M-Pesa Daraja</sub><br>
<a href="https://github.com/KabuorJnr/ChamaOne">Repository ↗</a>

</td>
</tr>
<tr>
<td width="50%" valign="top">

### ⚖️ Transparent Tenders Kenya &nbsp;<sub>`GovTech` · `Prototype`</sub>
**One e-procurement portal for all 47 counties and the national government.** Fraud heuristics flag shared directors, inflated prices, repeat winners and bid collusion. A SHA-256 ledger records every tender, bid, award and payment, and open JSON APIs let citizens, journalists and oversight bodies check the data themselves.

<sub>Node.js · Express · sql.js · Helmet · rate limiting</sub><br>
<a href="https://github.com/KabuorJnr/ttk">Repository ↗</a>

</td>
<td width="50%" valign="top">

### 🏗️ BuildFlow &nbsp;<sub>`Construction` · `Active`</sub>
**Contractor and site management.** When an expense is approved, the matching ledger debit is posted in the same transaction. Budget and actual spend are tracked per project, and the React Native field app syncs offline with idempotent retries. Runs on FastAPI in front of Supabase Postgres through the Supavisor pooler. Daraja B2C and KRA eTIMS come in phase 2.

<sub>FastAPI · SQLAlchemy async · Supabase · React Native</sub><br>
🔒 private repo

</td>
</tr>
</table>

<br>

## ◆ More builds

| Project | What it is | Stack |
|---|---|---|
| 🏟️ **[Stadi](https://github.com/KabuorJnr/stadi)** | Stadium ticketing for Kenyan venues: interactive seat map, M-Pesa checkout, USSD access, QR gate scanning | Laravel 11 · PWA · M-Pesa |
| 🤝 **[ComradeConnect](https://github.com/KabuorJnr/comrade-connect)** | Campus marketplace and newsfeed connecting students with student-run businesses | React · Firebase · Capacitor · Daraja |
| 📣 **CentrSocial** 🔒 | Social media scheduler with an engagement heatmap, bulk CSV scheduling and AI content remixing *(in development)* | Laravel · React · TypeScript · Redis · Gemini |
| 📜 **[Finance Bill 2026](https://github.com/KabuorJnr/FinanceBill26)** | Plain-language civic explainer of Kenya's Finance Bill 2026 | HTML · CSS · JS |
| 📈 **[AXIOM](https://github.com/KabuorJnr/axiom-financial-bot2)** | Markets tutor for bond yields, the dollar and Fed policy, with live FRED and Yahoo data and multi-model fallback | Python · Streamlit · Plotly |
| 🏫 **[digiSchool](https://github.com/KabuorJnr/DigiSchool)** | The first version of my school system: records, staff and role-based access, inspired by openSIS | PHP · MySQL |

<details>
<summary><b>Client & web work</b></summary>
<br>

| Project | Description |
|---|---|
| **[JoraTech](https://github.com/KabuorJnr/JORAD-TECH)** | Marketing site for a security installer: CCTV, access control, smart locks |
| **[Bella Apartments](https://github.com/KabuorJnr/bella-apartments-homabay)** | Rental listing site for an apartment block in Homa Bay |
| **[Tracy Abega Portfolio](https://github.com/KabuorJnr/tracy-portfolio)** | Portfolio for a graphic designer and visual artist |
| **[Neuroplasticity Report](https://github.com/KabuorJnr/neuro-research-interactive)** | Interactive research report on neuroplasticity and continual learning |

</details>

<br>

## ◆ How I build

<table>
<tr>
<td width="33%" valign="top">

**🔗 Tamper-evident by default**<br>
<sub>Money and procurement events go into append-only, hash-chained logs that anyone can verify. This runs through VeriBid, TTK, BlueProof and ChamaOne.</sub>

</td>
<td width="33%" valign="top">

**📶 Offline-first**<br>
<sub>Clients queue writes locally and sync with idempotent retries, so a dropped connection never means lost data or a double payment.</sub>

</td>
<td width="33%" valign="top">

**🧑‍⚖️ Humans approve the money**<br>
<sub>AI drafts and flags, while deterministic rules and a named reviewer make the call before any payout goes out.</sub>

</td>
</tr>
<tr>
<td valign="top">

**📱 M-Pesa native**<br>
<sub>STK push, B2C payouts and callbacks that are safe to replay, built for how people in Kenya actually pay.</sub>

</td>
<td valign="top">

**🛡️ Privacy by design**<br>
<sub>Row Level Security, recorded consent, data minimisation and deletion on request, following the Kenya Data Protection Act 2019.</sub>

</td>
<td valign="top">

**📝 Honest status**<br>
<sub>My READMEs say what's built, what's tested and what's still unproven.</sub>

</td>
</tr>
</table>

<br>

## ◆ Toolbox

<p>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img alt="PHP" src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white">
  <img alt="SQL" src="https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white">
  <br>
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8">
  <img alt="Capacitor" src="https://img.shields.io/badge/Capacitor-119EFF?style=flat-square&logo=capacitor&logoColor=white">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB">
  <br>
  <img alt="Laravel" src="https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white">
  <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white">
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-1C1C1C?style=flat-square&logo=supabase&logoColor=3ECF8E">
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white">
  <img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white">
  <img alt="Redis" src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white">
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-1C1C1C?style=flat-square&logo=firebase&logoColor=FFCA28">
  <br>
  <img alt="Power BI" src="https://img.shields.io/badge/Power_BI-F2C811?style=flat-square&logo=powerbi&logoColor=black">
  <img alt="Microsoft Fabric" src="https://img.shields.io/badge/Microsoft_Fabric-008080?style=flat-square&logo=microsoft&logoColor=white">
  <img alt="Apache Spark" src="https://img.shields.io/badge/Apache_Spark-E25A1C?style=flat-square&logo=apachespark&logoColor=white">
  <img alt="Delta Lake" src="https://img.shields.io/badge/Delta_Lake-00ADD8?style=flat-square&logoColor=white">
  <img alt="Microsoft Azure" src="https://img.shields.io/badge/Microsoft_Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white">
  <img alt="M-Pesa Daraja" src="https://img.shields.io/badge/M--Pesa_Daraja-00A650?style=flat-square&logoColor=white">
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white">
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white">
  <img alt="Render" src="https://img.shields.io/badge/Render-000000?style=flat-square&logo=render&logoColor=white">
  <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white">
</p>

<br>

## ◆ Let's work together

I'm open to **county and national government pilots, NGO partnerships and early-stage collaborators** in procurement, community finance, education and climate MRV.

<p>
  <a href="https://govtechbuilders.me"><img alt="Visit govtechbuilders.me" src="https://img.shields.io/badge/Get_in_touch-govtechbuilders.me-34D399?style=for-the-badge&labelColor=0B1220"></a>
</p>

<sub>Private repositories are marked 🔒. I'm happy to walk through the code on request.</sub>
