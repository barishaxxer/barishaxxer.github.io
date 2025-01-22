+++
title = "VIM for productivity"
date = "2025-01-12"
description = "Vim cheatsheetg"

[taxonomies]
tags = ["Vim"]

[extra]
author = { name = "barishaxxer", social= "https://github.com/barishaxxer"}
+++

<div class="caution">
This article has been written using nano
</div>

<div class="boringinfo">
Press esc type :wq! is answer to how to quit vim
</div>

# First of all

Ensure your tabsize is 4.

esc + set ts=4


# Quick operations on lines

**yy** -> copy line<br>
**pp** -> paste<br>
**dd** -> delete line<br>
**M** -> moves to middle of lines<br>
**H** -> moves to the top<br>
**L** -> moves to the bottom<br>
**0** -> moves to beginning of the line<br>
**$** -> moves to the end of the line<br>
**123gg or press esc then :123** -> move to line 123<br>
**u** -> undo <br>
**gg** -> to beginning of the file <br>
**G** -> to the end


# Insert mode

**fn + delete** -> forward delete


# Search and Replace

**%s/regex/new/g** -> replace every match of regex with new 
<div class="goodcall">
- % indicates to scan all file<br>
- 1,5 indicates to scan 1 to 5 <br>
- s indicates substitute mode<br>
- g indicates change all existence<br>
- i indicates ignore case
</div>

**/regex** -> search for regex<br>
**n** -> moves to next hit<br>
**N** -> moves to preceding hit


# Important to consider

Vim follows **POSIX Basıc Regular Expression (BRE)** which slightly differs from **Extended Regular Expression (ERE)**.
BRE tends to treat characters as literals so involves more backslashes to give them special meaning.

ERE | BRE <br>
<code>&emsp;&emsp;&ensp; |&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<br>
{5} | &bsol;{5}&nbsp; <br>
()&emsp;&nbsp;| \\(\\)&nbsp;<br>
\b &ensp;| &bsol;<&bsol;>
</code><br>
Further information can be found [here](https://vimregex.com)
