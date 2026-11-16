# Veille Technologique et Sécurité

## 1. Sources de veille suivies

**CERT-FR**
Agence gouvernementale
Alertes de sécurité critiques, bulletins d'actualité et recommandations.
Quotidien

**TLDR Newsletter / Daily.dev**
Agrégateur & Newsletter
Résumés des nouveautés, outils open-source, architecture logicielle et cloud.
Quotidien

**Le Monde Informatique**
Médias tech
Découverte d'outils open-source, astuces, tutoriels et actualités IT générales.
2 à 3 fois par semaine

**The Hacker News / BleepingComputer**
Médias spécialisés
Actualités cybersécurité, analyses de malwares, campagnes de phishing et failles.
2 à 3 fois par semaine


## 2. Éléments de veille sécurité récents (Octobre - Novembre 2026)

**14 oct. 2026** - **Multiples vulnérabilités dans Ivanti Connect Secure (ICS)**
CERTFR-2026-ALE-013
Exploitation active de trois failles (`CVE-2026-104935`, `111357` et `118527`) sur les passerelles VPN Ivanti Connect Secure.
Exécution de code à distance, élévation de privilèges et compromission des identifiants du réseau interne.
--> Appliquer les correctifs Ivanti (`22.8Rx` / `25.1.1.x`), lancer l'outil de vérification d'intégrité (ICT) et réinitialiser les secrets LDAP/Active Directory.
https://www.cert.cyber.gouv.fr/

**21 oct. 2026** - **Multiples vulnérabilités dans PHP**
CERTFR-2026-ALE-014
Publication d'une alerte concernant plusieurs failles affectant différentes branches de PHP
Contournement de sécurité, fuite d'informations ou exécution de code à distance selon la configuration.
--> Mettre à jour PHP vers les dernières versions correctives maintenues et vérifier la configuration du fichier `php.ini`.
https://www.cert.cyber.gouv.fr/

**13 nov. 2026** - **Multiples vulnérabilités dans le noyau Linux**
CERTFR-2026-AVI-1536 / 1537 / 1538
Découverte de plusieurs failles affectant les noyaux Linux des distributions majeures (Debian, Ubuntu, Red Hat).
Élévation de privilèges locale, déni de service (DoS) ou exécution de code arbitraire.
--> Appliquer immédiatement les mises à jour système (`apt update && apt upgrade`) et redémarrer les serveurs.
https://www.cert.cyber.gouv.fr/