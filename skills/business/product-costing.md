# 💰 Product Costing

---
name: product-costing
description: Framework für Produktkalkulation und Pricing
category: business
used_by:
  - cfo
  - financial-analyst
version: 1.0
---

## 📚 Übersicht

Framework für vollständige Produktkalkulationen mit Margin-Analyse.

---

## 📋 Kostenstruktur

### Direkte Kosten (COGS)
```
┌─────────────────────────────────────┐
│ DIREKTE KOSTEN                      │
├─────────────────────────────────────┤
│ Rohware/Material      │ 40-50%     │
│ Verpackung Primary    │ 8-12%      │
│ Verpackung Secondary  │ 3-5%       │
│ Branding/Custom       │ 5-10%      │
│ Arbeit/Labor          │ 5-8%       │
└─────────────────────────────────────┘
```

### Indirekte Kosten
```
┌─────────────────────────────────────┐
│ INDIREKTE KOSTEN                    │
├─────────────────────────────────────┤
│ Wastage/Schwund       │ 2-3%       │
│ Lagerkosten           │ 2-4%       │
│ Overhead              │ 5-8%       │
│ Delivery (wenn inkl.) │ variabel   │
└─────────────────────────────────────┘
```

---

## 📋 Kalkulations-Formel

```
VERKAUFSPREIS BERECHNUNG:

Preis = Total Costs / (1 - Ziel-Marge - VAT-Rate)

Beispiel:
- Total Costs: 15 AED
- Ziel-Marge: 35%
- VAT: 5%

Preis = 15 / (1 - 0.35 - 0.05)
Preis = 15 / 0.60
Preis = 25 AED (netto)
Preis = 26.25 AED (brutto inkl. VAT)
```

---

## 📋 Kalkulations-Template

```
PRODUKTKALKULATION: [Produktname]
════════════════════════════════════════

DIREKTE KOSTEN
├── Rohware:           [X.XX] AED
├── Verpackung Primär: [X.XX] AED
├── Verpackung Sekundär: [X.XX] AED
├── Branding:          [X.XX] AED
└── Arbeit:            [X.XX] AED
────────────────────────────────────────
Subtotal Direkt:       [X.XX] AED

INDIREKTE KOSTEN
├── Wastage (2%):      [X.XX] AED
├── Lager:             [X.XX] AED
└── Overhead (5%):     [X.XX] AED
────────────────────────────────────────
Subtotal Indirekt:     [X.XX] AED

════════════════════════════════════════
TOTAL COST:            [X.XX] AED
════════════════════════════════════════

PRICING (35% Marge):
├── Netto Preis:       [X.XX] AED
├── VAT (5%):          [X.XX] AED
└── Brutto Preis:      [X.XX] AED

MARGE CHECK:
├── Revenue:           [X.XX] AED
├── Cost:              [X.XX] AED
├── Profit:            [X.XX] AED
└── Marge:             [XX]%
```

---

## 📋 Break-Even Analyse

```
Break-Even Units = Fixed Costs / (Price - Variable Cost per Unit)

Break-Even Revenue = Fixed Costs / Contribution Margin %

Contribution Margin = (Price - Variable Cost) / Price
```

---

## 📋 Szenarien

Immer 3 Szenarien kalkulieren:

```
              PESSIMISTIC  BASE    OPTIMISTIC
Volume:       [X]          [X]     [X]
Price:        [X]          [X]     [X]
COGS:         [X]          [X]     [X]
───────────────────────────────────────
Revenue:      [X]          [X]     [X]
Profit:       [X]          [X]     [X]
Marge:        [X]%         [X]%    [X]%
```

---

## ✅ Checkliste

```
□ Alle direkten Kosten erfasst
□ Indirekte Kosten nicht vergessen
□ Wastage einkalkuliert
□ Ziel-Marge definiert
□ VAT korrekt berechnet
□ Szenarien durchgerechnet
□ Break-Even bekannt
```

---

*Konservativ kalkulieren, optimistisch verkaufen.*
