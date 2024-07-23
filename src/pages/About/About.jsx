import { Card, CardGroup, Container } from "react-bootstrap";
import "./About.scss";

const About = () => {
  return (
    <div className="background">
      <Container>
        <div className="about">
          <div>
            <h2 className="about__title">Áreas de Atuação</h2>
          </div>
          <div>
            <CardGroup>
              <Card>
                <Card.Body>
                  <h4 className="card-title">Direito Civil</h4>
                  <Card.Text>
                    No âmbito civil, lidamos com uma variedade de questões,
                    desde contratos comerciais até direito de propriedade e
                    responsabilidade civil. Nossa experiência nos permite
                    oferecer orientação sólida e representação eficaz em casos
                    complexos.
                    <p>Ramos do Direito Civil:</p>
                    <div className="list">
                      <ul>
                        <li>Direito de Propriedade</li>
                        <li>Direito de Familia</li>
                        <li>Direito de Sucessorio</li>
                      </ul>
                      <ul>
                        <li>Usucapião</li>
                        <li>Responsabilidade Civil</li>
                      </ul>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <h4 className="card-title">Direito Trabalhista</h4>
                  <Card.Text>
                    <ul>
                      <li>
                        Atendimento em defesa judicial ou advocacia preventiva
                        para empresas.
                      </li>
                      <li>
                        Ajuizamento de reclamatorias trabalhistas em geral.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <Card.Body>
                  <h4 className="card-title">Direito Condominial</h4>
                  <Card.Text>
                    Para questões relacionadas a condomínios, oferecemos uma
                    gama completa de serviços jurídicos. Nosso objetivo é
                    garantir a harmonia e a conformidade dentro da comunidade
                    condominial, incluindo:
                    <div className="list">
                      <ul>
                        <li>Assessoria em Assembleias</li>
                        <li>Elaboração de regulamentos internos</li>
                      </ul>
                      <ul>
                        <li>Cobranças e Resolução</li>
                        <li>Litígios entre condôminos</li>
                      </ul>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h4 className="card-title">
                    Orientação Patrimonial e Sucessória
                  </h4>
                  <Card.Text>
                    <p>
                      <strong>Planejamento Sucessório e Patrimonial</strong>
                    </p>
                    Estruturação de alternativas eficientes para proteção dos
                    bens do empresário (pessoa física ou jurídica) e organização
                    de sua sucessão, no Brasil e no exterior, para fins de
                    sucessão. Assessoria na elaboração de testamentos e na
                    organização de estruturas societárias para este propósito.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>

            <Card>
              <Card.Body>
                <h4 className="card-title">Mercado Financeiro</h4>
                <Card.Text>
                  <p>
                    <strong>Private Equity</strong>
                  </p>
                  Estruturação de investimentos de private equity no Brasil, por
                  meio de fundos ou outros veículos de investimento, inclusive
                  para investidores estrangeiros.
                  <p>
                    <strong>Venture Capital</strong>
                  </p>
                  Estruturação de investimentos de venture capital, seed
                  investments e investimentos-anjo no Brasil, por meio de fundos
                  ou outros veículos de investimento, inclusive para
                  investidores estrangeiros.
                  <p>
                    <strong>Renegociação de Dívidas</strong>
                  </p>
                  Assessoria para o desenvolvimento de projetos de
                  reestruturação de dívidas e refinanciamento de ativos.
                  <p>
                    <strong>Operações Estruturadas</strong>
                  </p>
                  Planejamento e estruturação de operações complexas no âmbito
                  do mercado financeiro e de capitais, considerando aspectos
                  tributários e regulatórios, mediante a utilização de
                  diferentes institutos, como consórcios e joint ventures.
                  <p>
                    <strong>Project Finance</strong>
                  </p>
                  Captação de recursos nos mercados financeiro e de capitais, no
                  Brasil e no exterior para o financiamento de projetos
                  específicos ou reorganizações societárias, bem como a
                  estruturação de investimentos estrangeiros no Brasil.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <h4 className="card-title">Direito Tributário</h4>
                <Card.Text>
                  <p>
                    <strong>Consultoria Tributária</strong>
                  </p>
                  Assessorias em questões relacionadas a tributos e
                  procedimentos fiscais, administração e manutenção de
                  contingências fiscais e regimes especiais de apuração e de
                  pagamento de tributos, além da estruturação de alternativas
                  eficientes para viabilização de negócios, inclusive operações
                  de fusão, aquisição e reestruturação societária.
                  <p>
                    <strong>Contencioso Tributário</strong>
                  </p>
                  Contencioso administrativo e judicial nas esferas federal,
                  estadual e municipal, em todas as instâncias, inclusive
                  perante os tribunais superiores, assim como o patrocínio em
                  demandas para a recuperação de créditos.
                  <p>
                    <strong>Precatórios e Créditos tributários</strong>
                  </p>
                  Assessoria e intermediação em negociações de precatórios e
                  créditos tributários (creditórios, ICMS, etc).
                </Card.Text>
              </Card.Body>
            </Card>
            <CardGroup>
              <Card>
                <Card.Body>
                  <h4 className="card-title">Direito Societário</h4>
                  <Card.Text>
                    <p>
                      <strong>Fusões & Aquisições</strong>
                    </p>
                    Assessoria em operações de aquisição e alienação de
                    participações societárias, fusões, incorporações, cisões,
                    aquisição e alienação de ativos, inclusive a negociação,
                    estruturação, implementação e interface com as autoridades
                    reguladoras competentes. Realização de diligência legal (due
                    diligence) com esse propósito.
                    <p>
                      <strong>Reorganizações societárias</strong>
                    </p>
                    Desenvolvimento e implementação de estratégias de
                    reestruturação, recuperação ou otimização de negócios,
                    através do assessoramento a empresas, underwriters e
                    financial advisors.
                    <p>
                      <strong>
                        Assessoria, consultoria e acompanhamento societário
                      </strong>
                    </p>
                    Assessoria, consultoria e acompanhamento societário
                    relacionados ao dia-a-dia de sociedades por ações, abertas e
                    fechadas, e sociedades limitadas, visando às melhores
                    práticas e ao atendimento à legislação aplicável, com
                    especial ênfase em companhias abertas e interface com a
                    Comissão de Valores Mobiliários - CVM. Assessoria em
                    constituição e alteração de atos constitutivos de sociedades
                    por ações ou limitadas, bem como em reuniões de sócios e
                    assembleias gerais. Representação de interesses de
                    acionistas em assembleias gerais de companhias.
                    <p>
                      <strong>Recuperação de empresas</strong>
                    </p>
                    Assessoria na estruturação e implementação de alternativas e
                    estruturas jurídicas para reorganização de empresas em
                    dificuldades financeiras e/ou em recuperação judicial ou
                    extrajudicial, incluindo a alienação de ativos distressed,
                    negociação de créditos e consumação de planos de
                    recuperação, representando investidores, credores, devedores
                    ou seus sócios/acionistas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <Card.Body>
                  <h4 className="card-title">
                    Comércio Internacional e Direito Aduaneiro
                  </h4>
                  <Card.Text>
                    <ul>
                      <li>
                        Consultoria no desenvolvimento de negócios e projetos de
                        internacionalização, estruturação de importação e
                        exportação e planejamento tributário;
                      </li>
                      <li>
                        Consultoria e contencioso envolvendo assuntos
                        aduaneiros, tais como classificação fiscal, valoração
                        aduaneira, regras de origem, regimes aduaneiros
                        especiais e licença de importação;
                      </li>
                      <li>
                        Consultoria para obtenção da certificação de Operador
                        Econômico Autorizado (OEA). Assessoria para obtenção de
                        Ex-Tarifário;
                      </li>
                      <li>
                        Consultoria e contencioso em barreiras tarifárias e
                        não-tarifárias ao comércio internacional, tais como
                        barreiras técnicas, sanitárias e de limites
                        quantitativos;
                      </li>
                      <li>
                        Relações governamentais em pedidos para alteração de
                        procedimentos de licenciamento, desembaraço e
                        regulamento aduaneiro;
                      </li>
                      <li>
                        Defesa do Governo brasileiro, empresas e associações de
                        classe em disputas junto à OMC;
                      </li>
                      <li>
                        Defesa Comercial: antidumping, salvaguardas e medidas
                        compensatórias (subsídios);
                      </li>
                      <li>
                        Regras de origem e investigação de anticircunvenção;
                      </li>
                      <li>
                        Assistência nos pleitos de alteração tarifária
                        permanente e provisória da Tarifa Externa Comum (TEC);
                      </li>
                      <li>
                        Acordos de Livre Comércio e de Preferências Tarifárias:
                        monitoramento, suporte nas negociações e interlocução
                        com autoridades brasileiras e associações de classe;
                      </li>
                      <li>
                        Assessoria, negociação e intermediação em exportação de
                        commodities (café, açúcar, soja, milho, minérios,
                        proteínas, metais preciosos, etc).
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
