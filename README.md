# learn-webpack
This is my webpack learn project

# 入口起点 Entry Porints
在webpack中有多种方式定义entry属性
    entry:string|Array<String>

当你向entry传入一个数组会发生什么，向entry传入数组将创建多个主入口
multi-main entry.传入数组这种方式有助于在想要多个依赖文件一起注入，
并且将他们的依赖导向到一个 chunk

# 常见场景
    分离应用程序app和公共库vendor入口
    {
        entry:{
            app:'./app.js',
            vendor:'./src/vendor.js'
        }
    }
从表面看，这告诉我们webpack从app.js和vendor.js开始创建依赖图标。这些图标是完全分离
互相独立的(每个bundle.js都有一个webpack引导

 此设置允许你使用CommonsChunkPlugin从bundle中提取vendor引用到vendor bundle，并把
 vendor引用的部分替换为_webpack_require_()的调用。如果应用程序bundle中没有vendor代码
 那么你可以在webpack中实现被称为长效缓存的通用模式


 # 多页面应用程序
        {
            entry:{
                app1:'./app1.js',
                app2:'./app2.js',
                app3:'./app3.js'
            }

        }
此entry属性告诉webpack需要3个独立的依赖图表。
在多页面应用中，服务器将为你获取一个新的HTML文档，页面重新加载新文档，并且资源
被重新下载。
使用CommonsChunkPlugin为每个页面间的应用程序共享代码创建bundle,由于入口起点增多，
多页应用能够在入口起点中庸大量代码/模块，这样可以极大的从中受益。

根据经验：每个HTML文档只使用一个入口起点。


# 输出 output
output选项控制webpack如何向硬盘写入编译文件，注意：即使存在多个入口起点，也只能指定
一个输出配置。

# 用法：
    filename:编译文件的文件名
    path:对应一个绝对路径，此路径是你希望保存文件的目录

    {
        output:{
            filename:'bundle.js',
            path:'/home/assets'
        }

    }

    # 选项

    chunkFilename

    非入口的chunk的文件名，路径相对于path目录 [id].[name].[hash].[chunkhash].js

    crossOriginLoading
    此选项启用跨域加载chunk

    devtoolLineToLine
    所有/指定的模块启用行到行映射模式，Line-to-line mapped使用一个简单的sourcemap,即
    生成资源的每一行都映射到原始资源的同一行，
    true,启动

    filename:
    指定硬盘每个输出文件的名称，在这里不能指定为绝对路径，output.path选项规定了文件
    被写入硬盘的文职。filename仅用于命名每个文件。

        单个入口：
        {
            entry:{'./src/app.js/'},
            output:{
                filename:'bundle.js',
                path:__dirname + '/build'
            }
        }

        多个入口：
        如果配置创建了多个chunk,
        [name],被chunk的name替换
        [hash] 被compilation声明周期的hash替换
        [chunkhash] 被chunk的hash替换

        {
            entry:{
                app:'./app.js',
                search:'./search.js'
            },
            output:{
                filename:'[name].js',
                path:__dirname + '/build'
            }
        }

    path
    导出目录为绝对路径（必选项）

    publicPath:
    在编译时不知道最终输出文件的publicPath的情况下，publicPath可以留空，并且在
    入口起点文件运行时动态设置。如果你在编译时不知道publicPath,你可以先忽略他，并
    且在入口起点设置

# loader
loader用于对模块的源代码进行转换。loader可以使你在require或import模块时预处理文件。
loader类似于gulp中task,并提供了处理前端构建不走的强大方法。
loader可以将文件从不同的语言转换为javascript,或将内联图像转换为data URL,loader甚至
允许你在javascript中import css文件

# module.rules允许你在webpack中指定几个loader,这是展示Loader的一种简明的方式，并且you
助于使代码见得简洁，而且对每个相应的Loader有一个完整的概述。

# 插件plugins
插件是webpack的支柱功能，在你使用webpack配置时，webpack自身也构建与同样的插件系统上。
插件目的在于解决loader无法实现的其他事。

# 用法
必须在webpack中配置，向plugins属性传入new实例.

=====================================

# 关于module.rules

module.rules:[
    {
       test:/\.jsx$/,
       include:[
        path.resolve(__dirname,'app')
       ],
       exclude:[
            path.resolve(__dirname,'app/demo-files')
       ],
       loader:'babel-loader'
    }
]

 这里面说匹配条件，每个选项都接受一个正则表达式或字符串来匹配文件类型
 test和include具有相同的作用，都是必须匹配选项
 exclude是必不匹配的选项，优先级高于test和include

 loader说解析时需要的Loader插件，为了更清晰，'-loader'后缀在webpack2
 中不再说可选的，而是要必须加上了。

 ## 最佳实践
 只在test 和文件名匹配中使用正则表达式
 在include和exclude中使用绝对路径(path.resolve()方法）
 尽量避免exclude,倾向于使用include.


## path.resolve()
整个配置中我们使用Node.js的path模块，并在他前面加上__dirname这个全局
变量，可以防止不同操作系统之间的文件路径问题，并且可以使相对路径按照预期
工作。

## alias 模块别名列表
## devtool
    通过在浏览器调试工具中添加元信息增强调试，


    ====================================

# 入口和上下文 entry and Context

    entry对象 用于webpack查找文件，启动并构建bundle的重要配置，告诉webpack
应该从哪里去查找，其上下文是文件所处的目录的绝对路径的字符串。
    他是应用程序的起点入口，从这个起点开始，应用程序启动执行，如果传递一个数组，
那么数组的每一项都会执行。
    如果传入一个字符串或者一个字符串数组，chunk会被命名为main,如果传入一个对象
则每个键key，会是chunk的名称，该值描述了chunk的入口起点

    context:
    基础目录，绝对路径，用于从配置中解析入口起点entry point和loader
    默认使用context的目录，但是推荐在配置中传递一个值。

# 输出 output
output位于对象最顶级键key,包括一组选项，指示webpack如何输出，以及在哪里输出你的
bundle,asset和其他你所打包或使用webpack载入的任何内容

    ## output.filename

    此选项决定了每个输出bundle的名称，这些bundle将写入到output.path选项指定的
    目录下。
    对于单个入口起点(entry为一个字符串)，filename将会说一个静态名称。

    然而，当有多个入口起点时(entry为对象或字符串），代码拆分或者各种插件plugin创建
    多个bundle,应该使用以下一种替换方式，来赋予每个bundle唯一的名称:

    使用入口名称：
        filename:'[name].bundle.js'
    使用内部chunk:
        filename:'[id].bundle.js'
    使用每次构建中，唯一的hash：
        filename:'[name].[hash].bundle.js'

    ## output.path

    path对应一个绝对路径

    ## output.publicPath

    对于按需加载或加载外部资源来说，这是一个重要的选项，如果指定了一个错误的值，则在这些
    资源时会收到404错误。

# 解析 resolve
    这个选项能设置模块如何被解析。webpack会提供默认值，

    ## alias
    创建import或require时使用的别名，来确保模块的引入变得更简单。

        resolve:{
            alias:{
                aaa:path.resolve(__dirname,'src/aaa/'),
                bbb:path.resolve(__dirname,'src/bbb/')
            }
        }

    然后，我们在导入中使用更简洁的方式：

        import $ from '../../src/aaa/jquery'
    变成这样：
        import $ from 'aaa/jquery'

    也可以在键值末尾添加$,表示精准的匹配

         alias:{
            aaa&:path.resolve(__dirname,'src/aaa/')
         }

    ## extensions

    自动解析确定的扩展，默认值为：

        extensions:['.js','.json']

    设置之后，可以让用户在引入模块时不带扩展后缀，

# 配合npm 使用
    考虑到用cli这种方式来运行webpack不是特别方便，可以设置快捷方式：
    在package.json中scripts属性下进行配置：
    //package.json
        <pre><code>
                "scripts":{
                    "dev":"webpack --config webpack.config.js""
                }
        </code></pre>

    这时我们只需要在命令行中输入npm run dev就可以运行webpack了。

# babel的使用
    在编译中需要babal,我们需要安装babel-core,babel-loader，
    切记：一定要安装babel预设，如：babel-preset-es2015,babel-preset-stage-0等


==============================================

# 题外话pinchzoom.js和touch.js
 pinkzoom.js可以双指缩放元素，touch.js可以使用手势触发一些灵活的效果
