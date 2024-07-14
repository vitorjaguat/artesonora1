const EmailTemplate = ({ name, email, subject, message }) => (
  <div
    style={{
      padding: '1rem',
      gap: '1rem',
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: '#000000',
    }}
  >
    <div style={{ marginBottom: '1rem' }}>
      Olá, Manata Laudares. Este e-mail foi enviado a partir do site{' '}
      <span style={{ fontWeight: 'bold' }}>Arte Sonora</span>.
    </div>
    <div style={{ marginBottom: '1rem' }}>A mensagem é a seguinte:</div>
    <div style={{ color: '#7f1d1d', marginBottom: '1rem' }}>{message}</div>
    <div style={{ fontSize: '0.75rem', marginBottom: '1rem' }}>
      (fim da mensagem)
    </div>
    <div style={{ marginBottom: '1rem' }}>
      Vocês podem responder essa mensagem dando REPLY neste e-mail. A sua
      resposta será enviada diretamente para o e-mail fornecido pelo remetente
      através do site.
    </div>
    <div style={{ fontSize: '0.75rem' }}>
      <div style={{ fontWeight: 'bold' }}>Dados da mensagem:</div>
      <div>Remetente: {name}</div>
      <div>E-mail: {email}</div>
      <div>Assunto: {subject}</div>
    </div>
  </div>
);

export default EmailTemplate;
