colors = {
    green     : ()=> '\033[32m',
    red       : ()=> '\033[31m',
    reset     : ()=> '\033[0m', 
    blue      : ()=> '\033[1;34m',
    darkGray  : ()=> '\033[1;30m',
    yellow    : ()=> '\033[1;33m',
    BgCyan    : ()=> '\x1b[46m',
    BgBlack   : ()=> '\x1b[40m',
    BgRed     : ()=> '\x1b[41m',
    BgGreen   : ()=> '\x1b[42m',
    BgYellow  : ()=> '\x1b[43m',
    BgBlue    : ()=> '\x1b[44m',
    BgMagenta : ()=> '\x1b[45m',
    Bright    : ()=> '\x1b[1m',
    Dim       : ()=> '\x1b[2m',
    Underscore: ()=> '\x1b[4m',
    Blink     : ()=> '\x1b[5m',
    Reverse   : ()=> '\x1b[7m',
    Hidden    : ()=> '\x1b[8m',
    Black     : ()=> '\x1b[30m',
    Green     : ()=> '\x1b[32m',
    Magenta   : ()=> '\x1b[35m',
    Cyan      : ()=> '\x1b[36m',
    White     : ()=> '\x1b[37m',
  }

var log = console.log;
var specCount = 0;
var executableSpecCount = 0;
var failureCount = 0;
var failedSpecs = []
var pendingSpecs = []
var specArray

var consoleReporter = {

  specStarted: null,
  jasmineTestsStarted: null,

  jasmineStarted: (jasmine) => {
    
    jasmineTestsStarted = new Date();
    
    
    log(`                                                   `);     
    log(`   ${colors.Green() }       ___    ___    ___      `);         
    log(`   ${colors.Green() }      / __|  |_ _|  / __|     `);         
    log(`   ${colors.Green() }      | (__   | |   \\__ \\   `);      
    log(`   ${colors.Green() }      \\___|  |___|  |___/    `);          
    log(`                                                   `);                  
    log('                                                   ');
    log('  ( Ferramenta de Teste Automatizado )             ');                                                                                       
    
  
  log(colors.Green());
  log('--------------------------------------');
  log(' Inicio dos testes           ');
  log(` ${colors.reset()}Hora:  ${colors.yellow() + jasmineTestsStarted.toLocaleString()}`)
  log(` ${colors.reset()}Total: ${colors.Green() + jasmine.totalSpecsDefined + colors.blue()}`)
  log(` ${colors.reset()}Randomico: ${colors.yellow() + jasmine.order.random + colors.blue()}`)
  log(` ${colors.reset()}Sementes: ${colors.yellow() + jasmine.order.seed + colors.blue()}`)
  log('--------------------------------------');     
  log('')
  log('')

  specCount = 0;
  executableSpecCount = 0;
  failureCount = 0;
  passedCount = 0;
  failedSpecs = [];
  pendingSpecs = [];
  specArray = [];

  },

  suiteStarted: (suite) => {

      colors.reset()
      if(suite.description.includes('Module')){
        log(colors.BgCyan() + colors.blue() + colors.White() + '###   INICIANDO TESTE PARA : ' + `${suite.fullName.trim()}`.toUpperCase() + '   ###');
        log(colors.reset())
      }else{
        log(colors.blue() + '\t >>> EXECUTANDO ATIVIDADE :' +  `${suite.fullName.trim()}`.toUpperCase() + " * ");
      }
  
    },

  specStarted: (spec) => {
      specStarted = new Date();
  },

  specDone: (spec) => {
    
    specCount++;
    if (spec.status == 'pending') {  
      // pendingSpecs.push(result);
      executableSpecCount++;
      specArray.push('*')
    }
    if (spec.status == 'passed')  {
        passedCount++;
        executableSpecCount++;
        specArray.push('.')
    }
    if (spec.status == 'failed')  {  
      failureCount++;
    //   failedSpecs.push(result);
      executableSpecCount++;
      specArray.push('F')
    }
    
    var lapsedTime = (new Date() - specStarted) / 1000;

    // log(JSON.stringify(spec))
      if(!spec.failedExpectations.length){
          log(colors.green() + '\t\t' + `${spec.description.trim()}`.toUpperCase() + '\t' +  lapsedTime + 's' + '\n');
      }         
      else {
          log(colors.red() + '\t\t' + `${spec.description.trim()}`.toUpperCase() + '\t' + lapsedTime + 's' + '\n');
          spec.failedExpectations.forEach((expectation) => {
              log(`\t\t ${colors.blue()} Teste: ${colors.reset()} ${JSON.stringify(expectation.matcherName)}  ${colors.green()} Esperado: ${colors.reset()} ${JSON.stringify(expectation.expected)}  ${colors.yellow()}  Resposta: ${colors.reset()} ${JSON.stringify(expectation.actual)}    `);
              log(`\t\t ${colors.darkGray()} Mensagem: ${JSON.stringify(expectation.message)} `);
              log(`\t\t ${colors.red()} Erro :     ${colors.red()} ${expectation.stack.split('\n')[1].trim()}` +'\n');
          })
          
      }
      

  },

  suiteDone: (suite) => {
      // console.log('\nResult of the suite is', result)
  },

  jasmineDone: () => {
      var totalTime = (new Date() - jasmineTestsStarted)/1000      
      var result = specArray.map(e=>{
        if(e=='.') return `${colors.green()}.`  
        if(e=='*') return `${colors.yellow()}*`  
        if(e=='F') return `${colors.red()}F`
    })
   
      log(colors.blue());
      log('--------------------------------------');
      log(' Testes Finalizados           ');
      log(` ${colors.reset()}Tempo total:  ${colors.yellow() + totalTime}`)
      log(` ${colors.reset()}Finalizado: ${colors.yellow() + new Date().toLocaleString() + colors.blue()}`)
      log(` ${colors.reset()}Falhas: ${colors.red() + failureCount + colors.blue()}`)
      log(` ${colors.reset()}Aprovados: ${colors.green() + passedCount + colors.blue()}`)
      log(` ${colors.reset()}Total: ${colors.blue() + executableSpecCount}`)
      log(` ${colors.reset()}Resultado: ${result.join('')}` + colors.blue())
      log('--------------------------------------');     
      log('')

  }
}

module.exports = exports = consoleReporter