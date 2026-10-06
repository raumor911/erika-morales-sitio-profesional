import { profileData } from '../data/portfolioData';

export function downloadVCard(): void {
  const vcardContent = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:Morales Domínguez;Erika Paola;;;`,
    `FN:${profileData.fullName}`,
    `TITLE:${profileData.roleTitle}`,
    `ORG:${profileData.organization}`,
    `EMAIL;TYPE=INTERNET,HOME:${profileData.email}`,
    `TEL;TYPE=CELL,VOICE:${profileData.phoneClean}`,
    `ADR;TYPE=HOME:;;Naucalpan de Juárez;Estado de México;;;México`,
    `URL:${profileData.canonicalUrl}`,
    `URL;TYPE=LinkedIn:${profileData.linkedInUrl}`,
    `NOTE:Product Owner especializada en IA Generativa, Transformación de Negocio y Banca Patrimonial en HSBC México.`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Erika_Morales_Dominguez.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
