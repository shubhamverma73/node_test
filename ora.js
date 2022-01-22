import ora from 'ora';

ora('Warn').warn();
ora('Info').info();
ora('Succeed').succeed();
ora('Fail').fail();


/*const spinner = ora('Loading unicorns').start();
setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 3000);*/