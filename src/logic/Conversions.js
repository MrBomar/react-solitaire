const AlphaScale = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const CardSymbols = ["A",  2,  3,  4,  5,  6,  7,  8,  9, 10,"J","Q","K"];
const CardValues = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
const SuiteScale = ["S","C","H","D","♠","♣","♥","♦"];

const FromAlpha = (alpha) => AlphaScale.indexOf(alpha);

const ToAlpha = (value) => AlphaScale[value];

const FromFaceValue = (value) => CardValues[CardSymbols.indexOf(value)];

const ToFaceValue = (value) => CardSymbols[CardValues.indexOf(value)];

const ToSymbol = (value) => SuiteScale[SuiteScale.indexOf(value)+4];

const FromSymbol = (value) => SuiteScale[SuiteScale.indexOf(value)-4];

const SuiteValues = () => SuiteScale.slice(0,4);

const SuiteSymbols = () => SuiteScale.slice(4,8);

export {FromAlpha, ToAlpha, FromFaceValue, ToFaceValue, FromSymbol, ToSymbol, CardValues, SuiteValues, SuiteSymbols};