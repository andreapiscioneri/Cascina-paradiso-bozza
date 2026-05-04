const data = JSON.parse(require('fs').readFileSync('i18n/locales/it.json', 'utf8'));
console.log('prospetto.rows type:', typeof data.posizionamento.prospetto.rows);
console.log('Is array:', Array.isArray(data.posizionamento.prospetto.rows));
if (Array.isArray(data.posizionamento.prospetto.rows)) {
  console.log('✓ Valid - length:', data.posizionamento.prospetto.rows.length);
} else {
  console.log('✗ ERROR - not an array');
  console.log('Content:', data.posizionamento.prospetto.rows);
}
