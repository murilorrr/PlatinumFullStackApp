import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Beneficiario } from '../model/beneficiario';

export const getBeneficiariosData = (): Beneficiario[] => {
  const stringData = readFileSync(
    join(__dirname, '../../../../../beneficiarios.json'),
    'utf8',
  );
  return JSON.parse(stringData);
};

export const createBeneficiario = (beneficiario: Beneficiario) => {
  const data = getBeneficiariosData();
  beneficiario.validate();
  data.push(beneficiario);
  setBeneficiarios(data);
  return beneficiario;
};

const setBeneficiarios = (arrayOfData) => {
  if (Array.isArray(arrayOfData))
    writeFileSync(
      join(__dirname, '../../../../../beneficiarios.json'),
      JSON.stringify(arrayOfData),
    );
};
