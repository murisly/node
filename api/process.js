
// 返回当前进程的工作目录
console.log(process.cwd());


// 触发node的abort事件，退出当前进程：
//process.abort()


// 当前 CPU 的架构：'arm'、'ia32' 或者 'x64'
console.log(process.arch);


// 包含命令行参数的数组。第一个元素是'node'，第二个参数是 JavaScript 文件的名字，第三个参数是任意的命令行参数
console.log(process.argv);


// 改变当前工作进程的目录，如果操作失败抛出异常。
//process.chdir(directory);


// 一个包含用来编译当前 node 执行文件的 javascript 配置选项的对象。它与运行 ./configure 脚本生成的 "config.gypi" 文件相同
console.log(process.config);


// 包含用户环境的对象
console.log(process.env);


// 启动进程所需的 node 命令行参数。这些参数不会在 process.argv 里出现，并且不包含 node 执行文件的名字，或者任何在名字之后的参数。这些用来生成子进程，使之拥有和父进程有相同的参数
console.log(process.execArgv);
// 例子:

// $ node --harmony script.js --version
// process.execArgv 的参数:

// ['--harmony']
// process.argv 的参数:

// ['/usr/local/bin/node', 'script.js', '--version']


// 开启当前进程的执行文件的绝对路径
console.log(process.execPath);


// 当前进程的 PID
console.log(process.pid);