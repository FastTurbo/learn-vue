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


