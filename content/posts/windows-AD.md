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


# Authentication Methods in Active directory

All credentials are stored in the Domain controller.

<p style="font-size:18px; color: #800040"> Kerberos Authentication </p>

1. By using **key derivation function** (KDF) a key derived from password.With this key username and timestamp are encrypted with this key.User sends this key to **Key Distribution Center** (KDC)(A service installed on the Domain controller)In Kerberos, the Authentication Server (AS) and the Ticket Granting Server (TGS) are generally implemented on the same server. This machine is called the Key Distribution Center (KDC).

**Authentication Server** (AS): This component is responsible for authenticating users when they first log in. It issues Ticket Granting Tickets (TGTs) to authenticated users.

**Ticket Granting Server** (TGS): This component provides service tickets based on the TGTs issued by the AS, allowing users to access various services securely without re-authenticating.

After user send their username and timestamp encrypted with kdf AS verifies and if valid issues a **Ticket Granting Ticket**(TGT) and a session key.

Every TGT is encrypted using the **krbtgt** accounts password hash therefore user cant access its contents.TGT also includes a copy of the Session Key as part of its contents and KDC has no need to store the Session Key as it can recover a copy by decrypting TGT.TGT can be decrypted by KDC.

krbtgt is a special service account to create TGT.


2. To acces a share, user will use their TGT to ask TGS to request a TGS.To get it user will send their username and timestamp encrypted by session key, TGT and a **Service Principal Name** (SPN) which indicates to the service intended to access.
Then KDC will response back with a TGS and **Service Session Key**(its used to authenticate to the server).TGS is encrypted using a key derived from the Service Owner Hash.TGS contains Service Session Key so Service Owner can acess it by decrypting TGS.

3. TGS can be sent to the desired service to authenticate.

<p style="font-size:18px; color: #800040"> NetNTLM Authentication </p>

<img src="/imgs/netntlm.png">
