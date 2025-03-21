# Kerchanshe Payroll System

## Project Overview

The goal of this project is to design and develop a fully functional **Kerchanshe Payroll System**. The system should calculate employee earnings, deductions, and net pay based on Ethiopian labor laws and tax regulations. This project demonstrates the ability to design a database, create a user-friendly frontend, and implement complex backend logic.

## Core Functionalities

- **Employee Management**: Add, update, hold/suspend, and remove employee records.
- **Payroll Calculation**: Automatically calculate earnings, deductions, and net pay.
- **Overtime Calculation**: Includes rates for normal, night, weekend, and holiday overtime.
- **Loan Management**: Manage loans and monthly deductions.
- **Taxation and Pension**: Apply progressive income tax rates and pension contributions.
- **Reports**: Generate payroll reports and export to Excel, PDF, or Word to send to the bank. Additionally, send payslips to each employee as per the attached format.
- **User Authentication**: Secure access for admin users.

## Project Requirements

### Backend
- **CRUD Operations**: Implement Create, Read, Update, and Delete functions for employee records.
- **Payroll Calculation Logic**: Code for computing gross earnings, deductions, and net pay.
- **API Endpoints**:
  - `/api/employees`
  - `/api/payroll`
  - `/api/reports`

### Frontend
- **Employee Form**: Form to enter personal details, salary, allowances, and deductions.
- **Payroll Dashboard**: Display gross earnings, deductions, and net pay for each employee.
- **Reports Page**: Generate and download payroll reports.
- **User Authentication**: Secure login for authorized users.

### Database Design
Tables:
- Employee Table
- Allowance Table
- Tax Table
- Payroll Table
- Overtime Rates Table

### Payroll Calculations
- **Gross Earnings**: Basic Salary + Non-Taxable Allowances + Taxable Allowances + Overtime Pay + Sales Commission.
- **Deductions**: Income Tax, Pension Contributions, Loan Deductions, Food Deduction, Penalties.
- **Net Pay Calculation**: Gross Earnings - Total Deductions.

## Installation

To set up the project locally, follow the steps below:

### Prerequisites

- Docker
- Docker Compose

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/mintesnotbekele/kerchanshe.git
   cd kerchanshe
   cd Fronted
   yarn install
   cd Backend
   yarn install
