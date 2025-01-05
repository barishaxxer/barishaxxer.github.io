+++
title = "Notes on Windows and Active Directory"
date = "2025-01-05"
description = "The Definitive Guide to Windows and Active Directory"

[taxonomies]
tags = ["Windows Pentesting", "Active Directory", "Powershell", "Cmd"]

[extra]
author = { name = "barishaxxer", social= "https://github.com/barishaxxer"}
+++

Windows domain is a group of users and computers.
The server runs the AD services is know as Domain Controller(DC)

<img src=/imgs/Active-Directory-1.jpg alt="AD">

Parts of the AD:

A **security principal** is any entity that can be authenticated by the operating system which consist of two parts in AD:

Each security principal is represented in the OS by a unique security identifier (SID).
Local users and groups are managed by SAM.SAM also stores usernames and passwords.

Subject: process initiated by the user.
Object: Resource that user wants to grant access

<img src=/imgs/securitypr.png alt=Authorization>

- User Accounts
- Machine ( Computer ) Accounts

<div style="color : red">Users:</div>

- People
- Services

<div style= "color : red">Machines:</div>

Machine accounts identified by the following convention MachineName$.
<br>
- DC01$
- DC02$

In Active Directory, administrative responsibilities are separated into two types:

1. Service Administrators
2. Data Administrators

Security Groups:

1. Domain Admins:

Have privleges over the entire domain / any computer including DC.

2. Server Operators:

Members of the Server Operators group can administer domain controllers. This group exists only on domain controllers. By default, the group has no members

3. Backup Operators:

Users in this group are allowed to access any file, ignoring their permissions.

4. Account Operators:

Users in this group can create or modify other accounts in the domain.

5. Domain Users:

Includes all existing user accounts in the domain.

6. Domain Computers:

Includes all existing computers in the domain.

**Organizational units (OUs)** in an Active Directory Domain Services (AD DS) managed domain let you logically group objects. 

OUs are mainly used to define sets of users with similar policing requirements.Security groups are for granting acces on resources.
