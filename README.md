# Azure DevOps Project Deployment & Synchronization Report

## 1. Organization & Project Setup
* **Organization URL:** https://dev.azure.com/eohoimiracle
* **Project Name:** New Project
* **Visibility:** Private (Access granted via direct evaluator user invite with Basic access level)
* **Process Template:** Agile

### Administration & Access Control
* **Access Configuration:** To satisfy security practices and maintain project confidentiality, access control was established at the organization level. The evaluator was explicitly invited using their Microsoft ID and granted **Basic** access to guarantee visibility into source repositories and build pipeline outputs.
* **Role Assignment:** Assigned the evaluator to the **Project Readers** group within the "New Project" workspace, overriding standard tenant restrictions to allow for seamless external grading.

### Agile Work Items & Sprint Planning
* **Process Template:** Agile
* **Sprint Structure:** Sprint names and goals are documented using Azure Boards Work Items and Sprint Capacity planning.
* **Work Item Examples:**
  * User Story: Configure CI/CD pipeline for repo `New Project`
  * Task: Add npm dependency caching and test execution to Azure Pipelines
  * Task: Create a simple unit test and update `package.json` test script
* **Sprint Tracking Evidence:**
  * Work items are linked in Azure DevOps Boards and tracked under the current sprint.
  * Acceptance criteria for each task include successful pipeline execution and passing unit tests.

---

## 2. Project Structure & Code Management
The local codebase was initialized using Git and linked concurrently to two cloud remotes to achieve redundant hosting and comprehensive visibility across both platforms.

### Remote Configurations
* **Origin (Primary Git Host):** `https://dev.azure.com/eohoimiracle/New%20Project/_git/New%20Project`
* **GitHub (Mirror Repository):** `https://github.com/Mbazement123/New-Project`

### Repository Tree Layout
```text
├── .gitignore
├── README.md                 <-- This Documentation Report
├── azure-pipelines.yml       <-- CI/CD Build Orchestration Script