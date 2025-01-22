+++
title = "Discrete Math for DSA"
date = "2025-01-20"
description = "Not intended to deep dive to discrete math.Focuses on creating a strong basis for data structures and algorithms specifically.Mostly appeals to computer science."

[taxonomies]
tags = ["Discrete Math"]

[extra]
author = { name = "barishaxxer", social= "https://github.com/barishaxxer"}
+++

<style>

.red{
	color: red;

}

</style>
<div class="goodcall">
Recommended to follow <a href="https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/video_galleries/video-lectures/">this </a> as go to resource.
</div>

# Logic and Proofs


A **proposition** is a declarative sentence that is either true
or false

**Truth value** of a proposition is denoted by true (T) or false (F).

The negation of p, is denoted by ¬p.

<div class="red">XOR

<div class="relative overflow-hidden shadow-md rounded-lg">
    <table class="table-fixed w-full text-left">
        <thead class="uppercase bg-[#6b7280] text-[#e5e7eb]" style="background-color: #6b7280; color: #e5e7eb;">
            <tr>
                <td contenteditable="true" class="py-1 border text-center  p-4">p</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">q</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">p ⊕ Q</td>
            </tr>
        </thead>
        <tbody class="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]" style="background-color: #FFFFFF; color: #6b7280;">
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
            </tr>
        </tbody>
    </table>
</div> 
Conditional Statement
<div class="relative overflow-hidden shadow-md rounded-lg">
    <table class="table-fixed w-full text-left">
        <thead class="uppercase bg-[#6b7280] text-[#e5e7eb]" style="background-color: #6b7280; color: #e5e7eb;">
            <tr>
                <td contenteditable="true" class="py-1 border text-center  p-4">p</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">q</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">p → Q</td>
            </tr>
        </thead>
        <tbody class="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]" style="background-color: #FFFFFF; color: #6b7280;">
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
        </tbody>
    </table>
</div>
<br>
<div class="relative overflow-hidden shadow-md rounded-lg">
    <table class="table-fixed w-full text-left">
        <thead class="uppercase bg-[#6b7280] text-[#e5e7eb]" style="background-color: #6b7280; color: #e5e7eb;">
            <tr>
                <td contenteditable="true" class="py-1 border text-center  p-4">Orıgınal</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">CONVERSE</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">Inverse</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">Contraposıtıve</td>
            </tr>
        </thead>
        <tbody class="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]" style="background-color: #FFFFFF; color: #6b7280;">
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">p&nbsp;→ q</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">q&nbsp;→ p</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">¬p&nbsp;→ ¬q</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">¬q → ¬p</td>
            </tr>
        </tbody>
    </table>
</div>

AND



<div class="relative overflow-hidden shadow-md rounded-lg">
    <table class="table-fixed w-full text-left">
        <thead class="uppercase bg-[#6b7280] text-[#e5e7eb]" style="background-color: #6b7280; color: #e5e7eb;">
            <tr>
                <td contenteditable="true" class="py-1 border text-center  p-4">A</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">B</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">Y</td>
            </tr>
        </thead>
        <tbody class="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]" style="background-color: #FFFFFF; color: #6b7280;">
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
        </tbody>
    </table>
</div>
OR
<div class="relative overflow-hidden shadow-md rounded-lg">
    <table class="table-fixed w-full text-left">
        <thead class="uppercase bg-[#6b7280] text-[#e5e7eb]" style="background-color: #6b7280; color: #e5e7eb;">
            <tr>
                <td contenteditable="true" class="py-1 border text-center  p-4">A</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">B</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">Y</td>
            </tr>
        </thead>
        <tbody class="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]" style="background-color: #FFFFFF; color: #6b7280;">
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
        </tbody>
    </table>
</div>

NAND operation in computer chips

<div class="relative overflow-hidden shadow-md rounded-lg">
    <table class="table-fixed w-full text-left">
        <thead class="uppercase bg-[#6b7280] text-[#e5e7eb]" style="background-color: #6b7280; color: #e5e7eb;">
            <tr>
                <td contenteditable="true" class="py-1 border text-center  p-4">P</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">Q</td>
                <td contenteditable="true" class="py-1 border text-center  p-4">P nand q</td>
            </tr>
        </thead>
        <tbody class="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]" style="background-color: #FFFFFF; color: #6b7280;">
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
            <tr class=" py-5">
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">0</td>
                <td contenteditable="true" class=" py-5 border text-center  p-4">1</td>
            </tr>
        </tbody>
    </table>
</div>

</div>

**Contradiction** : to prove P is true, we assume P is false and try to get a falsehood

# Induction

if P(0), P(0) => P(1), P(1) => P(2) ... and so on true then:<br>
every P(x) is true for ∀x ∈ N.
