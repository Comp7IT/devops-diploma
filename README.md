# DevOps Dashboard

## Opis projektu

Projekt przedstawia kompletny proces wdrażania aplikacji zgodnie z praktykami DevOps. Został wykonany w celu zaprezentowania automatyzacji budowania, wdrażania, konfiguracji oraz monitorowania aplikacji internetowej.

Projekt wykorzystuje nowoczesne narzędzia DevOps do automatyzacji całego procesu – od kodu źródłowego aż do działającej aplikacji monitorowanej w środowisku Kubernetes.

---

## Wykorzystane technologie

- Git
- GitHub
- GitHub Actions
- Docker
- Docker Hub
- Kubernetes (k3s)
- Terraform
- Ansible
- Prometheus
- Grafana
- Nginx

---

## Architektura projektu

```
GitHub
   │
   ▼
GitHub Actions (CI/CD)
   │
   ▼
Docker Hub
   │
   ▼
Kubernetes (k3s)
   │
   ├── Deployment
   ├── Service
   └── Pods
   │
   ▼
Prometheus + Grafana

Terraform
   │
   ▼
Generowanie konfiguracji

Ansible
   │
   ▼
Konfiguracja serwera Ubuntu
Uruchomienie aplikacji
```

---

## Funkcjonalności

- Automatyczne budowanie obrazu Docker.
- Publikacja obrazu do Docker Hub.
- Automatyczne wdrażanie aplikacji do klastra Kubernetes.
- Monitoring aplikacji przy użyciu Prometheus i Grafana.
- Automatyczna konfiguracja serwera Ubuntu z wykorzystaniem Ansible.
- Wykorzystanie Terraform do przygotowania konfiguracji dla Ansible.

---

## Struktura projektu

```
devops-diploma/
├── ansible/
├── docker/
├── frontend/
├── kubernetes/
├── monitoring/
├── terraform/
├── docs/
└── README.md
```

---

## Uruchomienie projektu

### Kubernetes

```bash
kubectl apply -f kubernetes/
```

### Terraform

```bash
terraform init
terraform plan
terraform apply
```

### Ansible

```bash
ansible-playbook playbook.yml --ask-become-pass
```

---

## Monitoring

Projekt wykorzystuje:

- Prometheus do zbierania metryk.
- Grafana do wizualizacji danych.
- Kubernetes Dashboard do zarządzania aplikacją.

---

## Autor

Comp7IT

Projekt wykonany w ramach kursu **DevOps Diploma**.
