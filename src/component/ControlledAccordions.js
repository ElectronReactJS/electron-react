import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import AccordionsContent from './AccordionsContent';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
        <AccordionsContent>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Inicio
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Dados iiciais do documento</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              AO JUÍZO DE DIREITO DA ________ VARA CÍVEL DA COMARCA DE ________ .

    Execução número: ________

    ________ , ________ , ________ , inscrito no CPF sob nº ________ , ________ , residente e domiciliado na ________ , ________ , ________ , ________ , ________ , vem à presença de Vossa Excelência, por meio do seu Advogado, infra assinado, ajuizar

    EXCEÇÃO DE PRÉ-EXECUTIVIDADE

    em face da Ação de Execução movida por ________ diante dos substratos fáticos e jurídicos que passa a expor:
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>1. DOS FATOS</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Trata-se de ação de execução de R$ ________ referente a ________ .
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Ocorre que, ________ como será cabalmente demonstrado, motivo pelo qual necessário se faz a apresentação da presente Exceção de Pré-Executividade.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
              2. DO CABIMENTO
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              A admissibilidade da exceção de pré-executividade é amparada pela...
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              A admissibilidade da exceção de pré-executividade é amparada pela análise necessária de questões de ordem pública, tratado-se de questões imperativas, que devem fulminar de imediato a execução. 
    Portanto, tratando-se de matéria cogente, tem-se por necessário processamento da presente exceção de pré-executividade, a qual poderia inclusive ser conhecida de ofício pelo julgador.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>3. DOS FUNDAMENTOS JURÍDICOS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              DA INEXISTÊNCIA OU NULIDADE DA CITAÇÃO
    Nos termos do art. 238 do CPC, a Citação é o ato pelo qual são convocados o réu, o executado ou o interessado para integrar a relação processual, indispensável para a validade do processo, conforme leciona a doutrina:
    "A citação é indispensável para a validade do processo e representa uma condição para concessão da tutela jurisdicional, ressalvadas as hipóteses em que o processo é extinto sem afetação negativa da esfera jurídica do demandado (indeferimento da petição inicial e improcedência liminar). Não se trata de requisito de existência do processo. O processo existe sem a citação: apenas não é válido, acaso desenvolva-se em prejuízo do réu sem a sua participação." (MARINONI, Luiz Guilherme. ARENHART, Sérgio Cruz. MITIDIERO, Daniel. Novo Código de Processo Civil comentado. 3ª ed. Revista dos Tribunais, 2017. Vers. ebook. Art. 239) 
    Trata-se, portanto, de matéria de ordem pública que pode ser alegada em qualquer fase de jurisdição, não ficando ocorrendo a preclusão, conforme leciona Arruda Alvim ao disciplinar sobre a matéria:
    "o processo sem citação (ou com citação nula somada à revelia) é juridicamente inexistente em relação ao réu, enquanto situação jurídica apta a produzir ou gerar sentença de mérito (salvo os casos de improcedência liminar do pedido - art. 332 do CPC/2015). Antes a essencialidade da citação para o desenvolvimento do processo, não há preclusão para a arguição da sua falta ou de sua nulidade, desde que o processo tenha corrido à revelia. Pode tal vício ser alegado inclusive em impugnação ao cumprimento da sentença proferida no processo viciado, ou até mesmo por simples petição, ou, se houver interesse jurídico, em ação própria (ação declaratória de inexistência)" (Novo contencioso Cível no CPC/2015. São Paulo: Editora Revista dos Tribunais, 2016, n.3.1.3, p. 204.)
    Ocorre que no presente caso, o excepto teve conhecimento da presente ação apenas quando ________ . Ou seja, não foi regularmente citado nos termos da lei, não podendo ser aplicado os efeitos da REVELIA.
    No presente caso, a citação não foi recebida diretamente pelo Réu, correndo indevidamente o processo à revelia, evidenciando a nulidade da citação, conforme precedentes sobre o tema:
    AÇÃO MONITÓRIA. NEGÓCIOS JURÍDICOS BANCÁRIOS. AÇÃO DE COBRANÇA. CUMPRIMENTO DE SENTENÇA. NULIDADE DA CITAÇÃO. VIOLAÇÃO MANIFESTA DA NORMA JURÍDICA. ART. 966, V, DO CPC. Ação rescisória proposta com base no inciso V, do art. 966, do CPC. Caso em que a firma individual, que se confunde com a sua titular, foi citada por carta AR, na ação de cobrança movida pelo Banco, recebida por terceira pessoa, prosseguindo o feito à revelia, culminando com a sentença de procedência. Citação irregular em afronta manifesta à norma jurídica, cabendo a rescisão da sentença de mérito e a nulidade de todos os atos a partir da citação, inclusive, sendo o caso de julgar procedente a ação monitória. Determinação de retorno dos autos à origem para a renovação do ato citatório e o regular processamento do feito a partir deste. AÇÃO RESCISÓRIA JULGADA PROCEDENTE. UNÂNIME. (TJ; Ação Rescisória, Nº 70079916235, Décima Segunda Câmara Cível, Tribunal de Justiça do RS, Relator: Pedro Luiz Pozza, Julgado em: 28-03-2019)#4556478 
    A lei autoriza a citação por edital somente nos casos expressos no art. 256 do CPC, quais sejam:
    Art. 256.A citação por edital será feita:
    I - quando desconhecido ou incerto o citando;
    II - quando ignorado, incerto ou inacessível o lugar em que se encontrar o citando;
    III - nos casos expressos em lei.
    § 1º Considera-se inacessível, para efeito de citação por edital, o país que recusar o cumprimento de carta rogatória.
    § 2º No caso de ser inacessível o lugar em que se encontrar o réu, a notícia de sua citação será divulgada também pelo rádio, se na comarca houver emissora de radiodifusão.
    § 3º O réu será considerado em local ignorado ou incerto se infrutíferas as tentativas de sua localização, inclusive mediante requisição pelo juízo de informações sobre seu endereço nos cadastros de órgãos públicos ou de concessionárias de serviços públicos.
    Portanto, não enquadrado nas situações acima referidas, a citação por edital é nula, pois tem como requisito básico que sejam esgotados todos os meios de citação pessoal.
    A doutrina, ao lecionar sobre o cabimento da citação por edital, destaca:
    "Requisito básico. Deve ser tentada a localização pessoal do réu por todas as formas, razão pela qual se diz que a citação por edital é subsidiária da citação pessoal. Somente depois desta resultar infrutífera é que estará aberta a oportunidade para a citação por edital." (NERY JUNIOR, Nelson. NERY, Rosa Maria de Andrade. 
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionsContent>
      </Box>
    </div>
  );
}
