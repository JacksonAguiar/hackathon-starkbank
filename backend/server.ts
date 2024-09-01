import { GoogleGenerativeAI } from "@google/generative-ai";

import express, { Request, Response } from "express";

import * as fs from "fs";
import * as path from "path";

const googleAI = new GoogleGenerativeAI(
  "AIzaSyCGpZyJNMvGiNR6EDqt4ojycvKNEzRVHhc"
);
var geminiConfig = {
  temperature: 0,
  topP: 1,
  topK: 32,
};

const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-pro",
  generationConfig: geminiConfig,
});

const cpAbsolutePath = path.resolve(__dirname, "corporate-purchase_1.csv");
const iAbsolutePath = path.resolve(__dirname, "invoice_1.csv");

const cp = fs.readFileSync(cpAbsolutePath, "utf-8");
const inv = fs.readFileSync(iAbsolutePath, "utf-8");
const data = "corporate purchases: " + cp + ";invoices: " + inv;

const prompt1 = `Considere que você é um especialista em analise financeira de empresas, com base nos dados, gere uma analise do fluxo de caixa, contendo um paragrafo com a retórica explicativa dos dados das tendencias que você encontrou`;
const prompt2 =
  "Considere que você é um especialista em analise financeira de empresas, realize uma análise das despesas corporativas. Identifique padrões, maior volume de gastos e compare-as com o orçamento previsto. Gere a analise em um unico paragrafo com a retórica explicativa dos dados das tendencias que você encontrou";
const prompt3 =
  "Considere que você é um especialista em analise financeira de empresas, analise o saldo entre entradas e saídas de caixa em um período definido (usando os campos created e due). Indique se a empresa está gerando caixa suficiente para cobrir suas despesas, e se há tendência de fluxo de caixa positivo ou negativo. Gere a analise em um unico paragrafo com a retórica explicativa dos dados das tendencias que você encontrou";
const prompt4 =
  "Considere que você é um especialista em analise financeira de empresas, faça uma análise de despesas e receitas por departamento. Identifique quais departamentos têm as maiores despesas e quais geram mais receita. Sugira ações para equilibrar os custos e aumentar a eficiência em departamentos de alto custo.Gere a analise em um unico paragrafo com a retórica explicativa dos dados das tendencias que você encontrou";
const prompt5 =
  "Considere que você é um especialista em analise financeira de empresas, analise todos os pontos de atenção dos dados que podem prejudicar o faturamento e saude da empresa. Gere a analise em um unico paragrafo com a retórica explicativa dos dados das tendencias que você encontrou";
const prompt6 =
  "Considere que você é um especialista em analise financeira de empresas, verifique se o com os dados que tem a previsões da empresa resulta em futuro promissor ou não. Gere se o resultado é negativo ou positivo.";

const generate = async () => {
  try {
    var prompts = [prompt1, prompt2, prompt3, prompt4, prompt5, prompt6];
    const promptConfig = [{ text: `Dados ${data}` }];

    const promises = [];

    for (const prompt of prompts) {
      promises.push(
        geminiModel.generateContent({
          contents: [
            { role: "model", parts: [{ text: prompt }] },
            { role: "user", parts: promptConfig },
          ],
        })
      );
    }

    var res = await Promise.all(promises).then((values) => {
      return values.map((value) => {
        return value.response.text();
      });
    });

    return res;
  } catch (error) {
    console.log(" response error", error);
  }
};

const app = express();
const port = 3000;

app.get("/analyse", async (req: Request, res: Response) => {
  var result = await generate();
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
