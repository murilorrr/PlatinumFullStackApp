import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export const getProposeData = (): any[] => {
  const stringProposePlans = readFileSync(
    join(__dirname, '../../../../../proposes.json'),
    'utf8',
  );

  const propose: any[] = JSON.parse(stringProposePlans);
  return propose;
};

export const create = (propose) => {
  const proposes = getProposeData();
  proposes.push(propose);
  setPropose(proposes);
  return;
};

export const acceptPropose = (id: string) => {
  const proposes = getProposeData();
  const proposeFinded = proposes.find((proposal) => proposal.id === id);

  if (!proposeFinded) throw new Error('Proposta não encontrada');

  proposeFinded.accepted = true;

  setPropose(proposes);
};

const setPropose = (arrayOfData) => {
  if (Array.isArray(arrayOfData))
    writeFileSync(
      join(__dirname, '../../../../../proposes.json'),
      JSON.stringify(arrayOfData),
    );
};
