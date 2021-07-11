const JOBLIST = [{
    name: "技术总监",
    type: 0,
    salary: "50k-上不封顶",
    responsibility: "1、负责在线游戏相关产品技术架构设计、实施及技术团队管理；\n2、负责公司视频引擎和云服务的架构设计，持续优化提升用户体验；\n3、负责视频编解码算法在不同终端（iOS/Android/Windows/Mac）的适配开发和优化；\n4、负责解决音视频产品开发和实施中的各类关键视频技术问题，协调业务团队推动实时通讯产品落地；\n5、组建掌握关键技术的、一流的视频流研发团队。",
    requirement: "1、有在线游戏相关产品从0到1研发经验，且研发成功并运营1年以上，大平台经验可加分；\n2、熟悉扫描设备及其IO交互；\n3、熟悉会话控制协议，至少熟悉一种以上的会话控制协议；\n4、熟悉WebRTC，RTCP相关技术，有丰富的实践和优化经验；\n5、了解掌握视频压缩技术的基本原理，包括H.264、H.265等Codec；\n6、了解各个平台的多媒体技术，包括Windows、iOS、Android等平台Capture、Render的实现机制；\n7、熟悉Realtime Media的拥塞控制和错误恢复技术，了解实时通讯相关的质量主客观评测；\n8、至少具备声学数字信号处理、图像处理、计算机视觉其中一类算法工作经验；\n9、有优秀的沟通能力，团队协作能力。"
}, {
    name: "Java架构师",
    type: 0,
    salary: "30-80K",
    responsibility: "1、参与产品的架构设计讨论和技术调研；\n2、搭建系统开发环境，完成系统具体的设计、编码及单元测试；\n3、撰写系统详细设计文档。\n",
    requirement: "1、本科及以上学历，互联网公司背景，8年以上工作经验；\n2、深入理解java 集合，多线程编程和JVM原理；\n3、熟悉微服务（Spring Boot/ Spring Cloud等），熟悉各种消息中间件（RabbitMQ/RocketMQ/Kafka等），熟悉Zookeeper、Etcd等服务发现和配置共享的开源项目；\n4、熟悉开源服务框架（Netty /Spring/ MyBatis /Dubbo等）；\n5、深入理解常用的缓存中间件，如Redis，具备分布式缓存设计经验；\n6、熟悉分布式消息（MQ/Kafka）并有优化经验，对搜索（ES/Solr）等机制有线上使用和优化经验；\n7、熟悉MySQL数据库及原理，熟练使用SQL语句及优化，对数据库事务、索引有深入理解；\n8、熟悉常用技术和中间件，如分库分表技术、消息中间件、分布式框架等；\n9、具有丰富的微服务架构实践和优化经验，有高并发系统设计经验；\n10、具备良好的编程习惯和工程规范；\n11、有较强的业务理解能力、领域建模能力和学习能力，思路清晰，语言表达流畅；\n12、熟悉Linux环境开发，熟悉常用SHELL命令，有Docker集群落地经验。"
}, {
    name: "高级Java",
    type: 0,
    salary: "30-60K",
    responsibility: "1、参与业务系统的分析和设计工作，承担核心架构的代码编写，负责系统改造升级；\n2、参与系统性能优化、技术难点攻关，持续提升系统在高并发、高访问量下的性能和系统稳定性；\n3、开发和维护统一的软件开发架构。",
    requirement: "1、本科及以上学历，互联网公司背景，3年以上工作经验，有过大型网站设计开发或高访问量业务开发经验；\n2、精通 Java 语言，熟悉SSH等常见开源框架，对JVM、多线程、网络IO、锁机制有深入理解及实践经验；\n3、熟悉MySQL数据库及原理，熟练使用SQL语句及优化，对数据库事务、锁、索引有深入理解；\n4、熟悉分布式服务架构，分布式缓存，能够实现高并发性、高可用性系统。\n5、熟悉Spring、Spring Boot、MyBatis、Redis、Kafka、MQ、Zookeeper、Dubbo等开源项目；\n6、 具备微服务开发经验者优先。"
}, {
    name: "高级前端开发-流媒体",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责直播类产品web端与第三方视频直播服务的对接；\n2、根据业务需求将第三方sdk进行封装；\n3、参与音视频直播重点、难点技术的攻坚，帮助团队解决问题；\n4、参与需求分析，实现业务侧对音视频及信令交互的业务需求；\n5、参与新技术的研究与开发。",
    requirement: "1、4年及以上的web前端开发经验，精通web前端技术架构，熟悉W3C标准，对web前端技术有较强的敏锐度；\n2、熟悉常用的前端框架(VUE、REACT等)、包管理工具和ES6语法，熟悉JS组件和模块的包装及复用；\n3、有直播相关领域的开发经验，熟悉FLV.js；\n4、了解主流的直播技术RTMP、HLS，有webRTC使用经验可加分；\n5、熟悉后台和底层的交互与通信，熟悉nodejs；\n6、沟通能力强，有良好的团队合作意识；\n7、有主导或参与过知名直播项目前端开发的优先；"
}, {
    name: "高级android开发-流媒体",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责直播类产品android端与第三方视频直播服务的对接；\n2、根据业务需求将第三方sdk进行封装；\n3、参与音视频直播重点、难点技术的攻坚，帮助团队解决问题；\n4、参与需求分析，实现业务侧对音视频及信令交互的业务需求；\n5、参与新技术的研究与开发。",
    requirement: "1、3年及以上的android开发经验，有直播相关领域的app开发经验优先；\n2、熟练掌握Java等编译语言，至少具备简单的C++开发能力；\n3、熟练使用android jni开发，对性能优化、内存泄露处理等有经验；\n4、熟悉TCP/UDP、HTTP等协议；\n5、了解主流的直播技术RTMP、HLS，有webRTC使用经验加分；\n6、沟通能力强，有良好的团队合作意识。"
}, {
    name: "高级流媒体研发工程师-流媒体",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责流媒体服务器的开发，包括直播、实时通信；\n2、优化流媒体产品用户体验，如延迟、流畅、画质；",
    requirement: "1、本科及以上学历，计算机或软件工程相关专业；\n2、二年以上流媒体开发经验，熟练掌握C/C++；\n3、精通TCP/HTTP/DNS协议原理，精通CDN原理和产品使用；\n4、熟悉音视频封装、编解码原理，熟悉RTMP、Http-Flv、HLS、dash等流媒体传输协议；\n5、熟练运用ffmpeg/EleCardVLC/OBS/Wireshark等工具；\n6、熟悉nginx、srs、live555、red5代码者优先；\n7、有端到端的音视频服务开发经验者优先，如采集、编码、推流、播放等；\n8、有视频CDN开发经验，精通视频CDN架构、策略、调度、建设及优化者优先。"
}, {
    name: "高级音视频开发(有pc客户端开发经验)-流媒体",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责音视频相关的开发工作，视频编码、混流等；\n2、负责主播端音视频的采集和推流客户端的开发；\n3、负责音视频相关前沿技术的研究；\n4、其它临时性工作任务。",
    requirement: "1、本科及以上学历，计算机或软件工程相关专业；\n2、3年以上音视频开发经验，熟练掌握C/C++；\n3、熟悉window界面程序开发，熟悉Windows平台的采集和渲染播放技术；\n4、精通音视频编解码相关规范，熟悉Ffmpeg、X264、OpenH264、Libfdk_aac、MediaCodec、VideoToolBox等通用编解码技术，具备较高的调优功底；\n5、熟悉流媒体相关技术；\n6、有跨平台音视频采集、编解码、渲染经验者优先；\n7、良好的学习能力和问题分析解决能力，强烈的责任心和团队精神，良好的沟通能力。"
}, {
    name: "高级音视频开发(服务端) - 流媒体",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责音视频相关的开发工作，视频编码、混流等；\n2、解决公司音视频相关难点，以及技术方案制定；\n3、负责音视频相关前沿技术的研究；\n4、其它临时性工作任务。",
    requirement: "1、本科及以上学历，计算机或软件工程相关专业；\n2、3年以上音视频开发经验，熟练掌握C/C++;\n3、精通音视频编解码相关规范，熟悉Ffmpeg、X264、OpenH264、Libfdk_aac、MediaCodec、VideoToolBox等通用编解码技术，具备较高的调优功底；\n4、熟悉流媒体相关技术；\n5、有跨平台音视频采集、编解码、渲染经验者优先；\n6、良好的学习能力和分析解决问题能力，强烈的责任心和团队精神，良好的沟通能力。"
}, {
    name: "高级webrtc研发工程师-流媒体",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责基于现有开源WebRTC技术的媒体网关的开发；\n2、负责媒体网关的优化改进，提高稳定性和兼容性；\n3、参与WebRTC中的媒体引擎和实时传输算法研究。",
    requirement: "1、本科及以上学历，计算机或软件工程相关专业；\n2、3年及以上服务端C/C++开发经验，具有扎实的计算机理论基础；\n3、良好的编程习惯，精通C/C++，熟悉多线程编程；\n4、精通WebRTC架构，并有相关项目实际开发经验；\n5、熟悉至少一种流媒体协议，包括 RTP、RTCP、RTMP、RTSP、HLS、HTTP-FLV等；\n6、熟悉音视频编码格式，包括H.264、VP8、AAC等；\n7、良好的团队合作意识和沟通能力；\n8、熟悉开源WebRTC服务器者（如kurento、licode、janus等）优先。"
}, {
    name: "高级java开发工程师-流媒体",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责数据统计与监控系统的开发；\n2、负责回源验证平台的开发；\n3、负责实时调试平台的开发；\n4、负责webrtc信令系统的预研。",
    requirement: "1、计算机相关专业，3年以上java相关服务端设计及研发经验；\n2、精通JAVA核心编程技术，熟悉多线程、网络、接口编程；\n3、JAVA技术知识扎实，熟悉IO、多线程、异步处理、集合类等基础框架和常用中间件产品，熟悉缓存、消息、搜索等机制；\n4、熟悉http协议、tcp/ip协议、nio模式，并在开发中熟练使用；\n5、熟悉Linux、Tomcat、Netty、Apache、nginx等基本原理及使用；\n6、熟悉常见的NoSQL产品(memcached/Redis/MongoDB)；\n7、熟练掌握MySQL、oracle等常用关系型数据库使用；\n8、有应用容器、分布式协调系统(如zookeeper)、高性能通信框架或系统开发的经验优先。"
}, {
    name: "H5前端",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责前端架构的设计、搭建与改进；\n2、负责前端相关工具、库和文档的创建、维护及优化；\n3、负责前端文档的编写、整理及优化。",
    requirement: "1、3年及以上前端开发经验，具有良好的编程习惯；\n2、精通H5、JS、CSS，能够快速编写高质量的前端代码，具备手机端兼容性问题解决能力；\n3、熟练使用node.js、webpack等工具；\n4、熟悉angular、vue等，并对组件开发有深入了解；\n5、有移动端H5开发经验及产品展示经验；\n6、使用过跨平台开发工具，如ionic等；\n7、熟悉接口式开发；\n8、熟悉常用第三方接口；\n9、熟悉各种缓存方案的使用。"
}, {
    name: "DBA",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责数据库性能优化：评价数据库运行状态，调整数据库参数，优化数据库性能；\n2、负责数据库设计和维护：创建和维护数据库存储结构及对象，制定数据库访问策略；\n3、负责数据库性能监控和分析：做好数据库的日志分析和数据统计分析，对数据库运行状态进行实时监控，确保数据库的可靠运行；\n4、负责数据库备份管理：制定数据库数据备份策略，保证数据的完整和安全，能够快速安全地完成数据备份与恢复；\n5、负责设计和开发数据库查询语句、视图和存储过程，审查开发人员的查询语句、视图和存储过程；\n6、负责配合研发制定数据库技术方案、分库分表策略、数据迁移方案。",
    requirement: "1、本科及以上学历，3年以上MySQL DBA经验；\n2、熟悉MySQL、Redis的体系架构，熟悉常用存储引擎的功能特点和应用场景；\n3、精通MySQL/Mongodb/Redis的备份、恢复、集群方案、主从复制的原理和实践；\n4、精通数据库的性能优化、SQL调优，对锁和事务隔离问题有深入理解；\n5、具有较强的自我驱动性，追求做事效率，善于使用工具管理自己任务者优先。"
}, {
    name: "资深设计师",
    type: 3,
    salary: "30-80K",
    responsibility: "1、负责公司产品的美术创意及UI界面设计；\n2、负责整体风格、视觉效果、用户操作体验的策划及设计；\n3、把握设计趋势并提出创新性的设计思路；\n4、熟悉用户习惯，注重用户体验并且具有交互和平衡能力；\n5、参与设计体验、设计流程、视觉设计等规范的制定；\n6、提高美观性和用户体验，把控产品最终界面实现效果，对产品结构、流程、功能、界面用户体验、交互功能等进行研究并提出改善方案。",
    requirement: "1、8年以上设计经验；\n2、有成功的项目案例（明星产品更佳）；\n3、倾向于棋牌、游戏方向，作品能一眼看出亮点和创新力；\n4、对设计有不同维度的思考和分析，有把控全局的能力，对问题能深入探讨并提出多种解决方案；\n5、手绘、插画经验丰富者优先。"
}, {
    name: "性能测试",
    type: 0,
    salary: "30-60K",
    responsibility: "1、深⼊了解产品及底层技术架构，制定合理的测试⽅案；\n2、负责业务线测试项⽬工作计划制定及管理；\n3、主导项⽬各阶段的质量把控，并对可能的质量风险推进解决；\n4、主导测试技术的改进，提升整体测试质量和效率。",
    requirement: "1、计算机相关专业本科及以上学历；\n2、具备5年以上互联⽹产品开发或测试经验，有团队管理经验，有⼤型项目测试⽅案制定及跨端项目测试管理经验；\n3、熟悉软件测试理论和方法，在服务端⾼可用性测试和⾃动化系统架构设计⽅面有独到⻅解；\n4、熟悉互联⽹分布式系统的服务架构及⽹络编程；\n5、熟练掌握C/C++/Java/Python等⾄少一种开发语言，熟悉mysql、redis、MongoDB、mq等数据存储和处理技术；\n6、善于主动学习和运⽤新知识，具有良好的分析和解决问题能力，对互联⽹测试⼯作有高度热情。"
}, {
    name: "游戏测试",
    type: 0,
    salary: "30-60K",
    responsibility: "1、根据产品需求文档编写测试用例并进行用例互审；\n2、独立完成同类型游戏全量测试，并协助开发定位BUG；\n3、进行游戏终端兼容性及适配测试；\n4、负责BUG跟踪与管理，并生成测试报告。",
    requirement: "1、计算机相关专业，有大型线上棋牌游戏完整项目测试经验；\n2、熟悉adb指令，熟悉appium/robotframwork等相关自动化框架及工具，有手游适配测试经验；\n3、熟练使用wireshark/fiddler/charles抓包工具；\n4、有不同类型棋牌游戏杀数验证及牌型遍历的测试经验。"
}, {
    name: "自动化测试开发",
    type: 0,
    salary: "30-60K",
    responsibility: "1、按照版本周期，制定测试计划并跟踪测试进度；\n2、负责存储产品的准入测试、功能测试、兼容性测试、性能测试、自动化测试等；\n3、参与需求评审、功能澄清，根据产品特点制定测试需求、测试计划和测试策略；\n4、负责设计和编写测试用例；\n5、负责搭建测试环境并完成测试内容，负责定位并隔离软件缺陷；\n6、完成测试结果评估并汇总测试报告。",
    requirement: "1、计算机相关专业，本科及以上学历；\n2、3年以上大型软件测试经验，对需求的理解深入，能够参与项目的架构设计与评估，能够根据项目特点制定测试方案；\n3、对软件测试流程和方法有良好的理解和积累，在软件研发过程中熟知常用质量控制手段；\n4、熟悉Linux操作系统、Tcp/Ip网络协议，熟悉MySQL/Oracle等数据库，有C/C++、java、python、shell其中2到3种语言的开发经验；\n5、具备自动化测试和性能测试的设计和应用经验，参与过大型系统的自动化和性能测试，并对自动化和性能测试有全面的理解；\n6、具备良好的学习能力、问题定位和分析能力；\n7、具备创新性思维、较强的抗压能力和良好的沟通能力。"
}, {
    name: "功能测试",
    type: 0,
    salary: "30-60K",
    responsibility: "1、快速理解业务需求，并根据需求文档细化测试用例，实现业务功能逻辑覆盖；\n2、独立搭建测试环境，完成单个项目全量接口测试并生成测试报告；\n3、配合开发、运维追踪并定位线上问题。",
    requirement: "1、精通Postman及Jmeter，能够独立进行接口功能、性能、容错性、安全性测试；\n2、精通MyQL/Oracle/MongoDB等数据库，能够编写常用SQL语句；\n3、熟悉LINUX/Unix常用指令；\n4、有python自动化接口测试经验；\n5、熟练使用wireshark/fiddler/charles抓包工具；\n6、熟悉java web开发框架或python web开发框架；\n7、有大型、多人在线应用系统测试经验优先。"
}, {
    name: "SCM",
    type: 0,
    salary: "20-60K",
    responsibility: "1、负责识别目前配置管理过程中的改进点，优化配置管理流程和制度；\n2、搭建并维护研发系统的配置管理环境，包括配置库权限管理、配置库优化；\n3、负责自动化系统工具的开发与维护；\n4、负责Gerrit/Gitlab/Nexus/Sonar/Jenkins/Confluence 等系统的配置管理工作；\n5、负责进行配置管理规范与工具的相关培训。",
    requirement: "1、熟悉敏捷开发、CICD、DevOps相关方法与实践；\n2、熟悉Linux系统，掌握基本linux命令；\n3、精通Python/Shell/Ruby脚本语言（至少其中2种），有良好的编程习惯；\n4、熟练掌握Git/SVN工具；\n5、熟悉Gerrit/Gitlab 等代码管理工具；\n6、熟悉Jenkins工具使用，具有CI/CD持续集成经验；\n7、有Android平台编译系统经验优先；\n8、有Redmine二次开发经验优先；\n9、至少5年以上配置管理经验。"
}, {
    name: "高级产品经理",
    type: 1,
    salary: "30-60K",
    responsibility: "1、深刻理解用户需求及使用场景，设计相应的产品及服务流程；\n2、负责产品的完整规划，优化和完善现有流程；\n3、与技术、市场等团队密切配合，确定技术实施方案及合理的执行计划，在产品的设计、开发、发布、运营、培训、推广等不同阶段把握产品的方向和质量；\n4、组织编写产品需求文档、用户手册；\n5、负责产品开发中需求解释以及上线后功能确认；\n6、协助市场营销等部门完成产品营销推广计划；\n7、负责公司平台产品及商业产品用户反馈监控；\n8、负责竞争对手的产品跟踪分析，根据市场反馈和用户需求，不断改善产品功能。",
    requirement: "1、本科及以上学历，计算机、管理、数据、金融等相关专业优先，5年以上互联网产品经理或总监任职经历；\n2、熟悉客户需求分析、客户体验效果分析、产品规划、交互设计效果分析、产品修正、市场营销效果分析，有丰富的产品构建和市场运作经历；\n3、具有宏观管理思维，具备较强的团队管理能力、团队培养能力、跨团队沟通与协作能力，责任心强、踏实肯干、诚实敬业；\n4、对各种互联网产品或常用软件有强烈兴趣并有灵敏触觉，富有创造力和激情；\n5、有一定视觉设计和XHTML/CSS等技能，对交互设计过程有深入的了解，能熟练应用流程图、线框图等交互设计方法。"
}, {
    name: "运维架构师",
    type: 4,
    salary: "30-60K",
    responsibility: "1、负责整体跨海直播系统的运维架构设计及优化，实现系统持续集成和自动化部署；\n2、主导解决运维工作中的重大故障、性能瓶颈等疑难问题；\n3、构建基于混合云的灾备体系，保障体系的高可用性和弹性伸缩。",
    requirement: "1、本科及以上学历，7年以上运维开发或应用运维经验(能力特别优秀者不限制)，3年及以上直播领域相关经验；\n2、了解Linux/Unix等操作系统，精通python、go、java、c至少一种开发语言；\n3、有大规模直播、点播的部署架构经验，对于网络优化有深入的理解；\n4、精通行业IT系统架构，具备丰富的系统/网络/存储/虚拟化/数据库/软硬件备份和复制方案的设计、 比较及评估实践经验；\n5、具备极强的沟通能力和一定的团队管理能力。"
}, {
    name: "值班运维",
    type: 4,
    salary: "20-50K",
    responsibility: "1、负责日常系统维护及监控，提供IT软硬件方面的服务和支持，以服务为中心，以稳定、安全、高效为三个基本点保证系统的稳定，为用户提供高质量的服务；\n2、负责相关故障和疑难问题的排查处理，汇总故障和问题，定期提交汇总报告；\n3、参与部分项目工作，并对实施结果负责；\n4、负责IT运维相关流程的规划、设计、推行、实施和持续改进；\n5、全面负责运维项目的系统升级、扩容需求管理及资源落实，根据开发和测试需求调整运维平台。",
    requirement: "1、本科及以上学历，4年以上互联网业务相关系统维护工作经验；\n2、熟悉自动化运维并有相关经验，至少一年以上自动化运维相关工作经验；\n3、熟悉监控系统设计并有相关经验，有Prometheus相关经验者优先 ；\n4、熟悉Kubernetes、docker等容器化相关的技术和运维，可以独立解决使用过程中出现的问题 ；\n5、熟悉Apache、JBoss、Tomcat，熟悉Apache、JBoss/Tomcat集群配置和管理，具备中间件故障排查、性能诊断与分析等能力；\n6、熟练jenkins、git、svn软件，对软件操作与命令熟悉有丰富经验，熟练使用Python/golang至少一种语言；\n7、具备局域网网络搭建、权限控制与排错能力；\n8、良好的逻辑分析能力和学习能力、良好的沟通能力、很强的排错能力。"
}, {
    name: "资深k8s 专家",
    type: 4,
    salary: "25-60K",
    responsibility: "1、负责搭建K8S集群并进行日常维护；\n2、负责公司K8S集群研究、技术攻关及技术验证；\n2、根据需求对K8S微服务系统做二次开发；\n3、对内部员工进行k8s技能培训。",
    requirement: "1、精通Kubernetes及周边生态核心项目，有kubernetes实战经验；\n2、精通Prometheus、EFK等容器监控、日志及周边生态项目；\n3、精通Calico、flannel等容器SDN网络技术；\n4、精通Go、python、java等一种以上编程语言；\n5、有开源软件二次开发的经验；\n6、对docker容器、镜像、网络、存储、持久化、监控及安全有深入的理解；\n7、有大型devops平台或devops商用产品3年以上实际开发经验；\n8、熟悉envoy、istio架构优先；\n9、有8年以上工作经验，其中3年以上k8s实际使用经验。"
}, {
    name: "k8s 运维",
    type: 4,
    salary: "25-50K",
    responsibility: "1、负责公司K8S集群管理、监控及相关业务支撑；\n2、负责公司devops平台同k8s的对接；\n3、负责日常运维及自动化脚本维护；\n4、负责持续集成（CI）、持续交付（CD）和devops工作协助。",
    requirement: "1、熟悉k8s/kubernetes容器编排，有实际项目经验；\n2、对docker容器、镜像、网络、存储、持久化、监控、安全有深入的理解；\n3、熟悉Linux及其各种常用服务，熟悉Python和常用框架技术；\n4、掌握常用业务监控方式，熟练使用zabbix、prometheus监控工具。\n6、有5年以上工作经验。"
}, {
    name: "资深python全栈开发",
    type: 0,
    salary: "30-60K",
    responsibility: "1、负责公司devops平台的研发；\n2、负责公司监控平台二次研发工作；\n3、负责devops同k8s对接。",
    requirement: "1、精通python、django框架；\n2、精通vue、bootstrap、jquery、ajax等前端框架；\n3、有过devops平台实施和cmdb数据库设计的经验；\n4、能够基于各种python开源框架做二次开发；\n5、有reset api设计经验；\n6、有k8s运维经验优先；\n7、8年以上工作经验，5年以上python开发经验。"
}, {
    name: "桌面运维",
    type: 4,
    salary: "20-50K",
    responsibility: "1、负责设备的技术支持，熟悉服务器、台式机、笔记本硬件配置，熟悉outlook、office、skype、会议系统等客户端，精通安装、配置、维护和故障排除；\n2、负责公司内部IT相关网络设备及服务器的部署、管理、运维和优化等工作，保证系统正常运转，负责路由器、交换机的配置和故障排错等；\n3、负责私有云、虚拟化平台及虚拟化服务器的管理，以及服务器、虚拟机的应用程序数据备份、还原以及数据同步；\n4、解决日常网络安全问题，根据企业需求制定网络安全解决方案，在出现网络攻击或安全事件时进行紧急响应、恢复系统及调查取证；\n5、负责对公司系统环境漏洞的扫描，对网络、系统、数据库、业务系统进行安全风险评估、加固和持续优化；\n6、负责系统集成和监控安防工程项目实施，包括综合布线、网络监控产品安装调试等；\n7、协调项目工程实施，合理安排工程进度和各项资源配置；\n8、撰写服务器、网络设备、应用程序的操作说明及配置文档，负责GMP相关的计算机验证工作等；\n9、完成上级安排的其他工作。",
    requirement: "1、全日制本科及以上学历，计算机、信息管理等相关专业；\n2、3年以上中大型企业运维或技术支持经验，具备IT系统标准化、体系化运维经验优先；\n3、熟悉Exchange Server和Windows服务器的基础架构服务配置（AD、DNS、DHCP等），精通网络技术，熟悉主流防火墙、IPS、VPN、WAF、防数据泄漏、入侵检测、攻防技术、漏洞扫描、入侵防御、防病毒、系统加固等安全技术；\n4、熟悉桌面、网络、主机、安全、应用、机房等运维工作，有较强的动手能力，能够迅速的响应和解决实际问题，具有较强的网络安全意识、较强的信息安全和保密意识；\n5、工作主动性和责任心强，具有良好的服务意识及团队合作精神；\n6、具有良好的表达沟通能力、团队协作精神，高效且诚实守信。"
}, {
    name: "设计总监/UI专家",
    type: 3,
    salary: "50k-上不封顶",
    responsibility: "1、负责业务/产品ui的视觉设计，主导视觉规范制定；\n2、站在用户角度挖掘需求，为产品功能和特性提供合理的系统化设计解决方案；\n3、独立承担项目，引领团队进行ui视觉设计思维的创新，实现产品视觉呈现在用户体验上和视觉上的突破；\n4、设计经验丰富，参与app、web、h5等界面设计，具备强悍的设计推动力。",
    requirement: "1、美术院校设计专业毕业，对设计有独特的理解；\n2、8年及以上相关工作经验，主导过多套产品和业务的UI设计，有丰富的多平台产品视觉设计经验；\n3、对各种互联网产品趋势有敏锐的设计触觉，富有设计创造力和激情，有探索研究精神；\n4、有较强的逻辑思维能力，掌握业务需求分析、产品需求分解的技巧；\n5、学习能力强，具有良好的沟通和设计表达能力、良好的团队协作态度，主动积极，踏实细心，协调能力强。"
}, {
    name: "产品副总监",
    type: 1,
    salary: "50k-上不封顶",
    responsibility: "1、负责产品团队的建设管理、工作部署及产品方向把控，参与产品的战略决策；\n2、负责所有产品的市场分析、需求分析、产品功能设计、业务模型设计等，规划和决策重大产品版本的关键需求；\n3、负责各产品线间的协调工作，根据用户需求、行为等组织讨论制定产品优化方案及实施；\n4、深刻理解公司战略和业务，协调资源，完成短中长期的产品目标；\n5、规范产品各项工作，负责制定各阶段工作计划，进行目标分解，制定各项工作计划并组织开展；\n6、把握产品走向，针对产品各项数据及用户反馈，可根据产品特性制定有效的产品运营策略。",
    requirement: "1、全日制大学本科及以上学历，专业不限；\n2、从事产品工作7年以上，有多年大型项目管理经验，有较强的方案设计能力、创新精神、较强的逻辑思维和分析能力，有全局观念、优秀的沟通和协调能力；\n3、有知名互联网公司的工作经验，且同时有 B 端产品和 C 端产品项目经验优先；\n4、熟悉互联网及移动互联网产品应用，有在游戏、社交、娱乐、大数据、云计算、智能终端等其中一个领域超过3年以上的工作经验；\n5、具有敏锐的市场意识、良好的运营思维和创新意识，擅长产品的前期调研和用户行为分析，具有优秀的产品设计能力，对用户体验的细节极敏感，并能够提出有针对性的产品改善方案；\n6、具备项目管理的经验及团队管理的能力。"
}, {
    name: "Java架构师",
    type: 0,
    salary: "30-80K",
    responsibility: "1、参与公司平台技术架构的研究，并进行技术落地；\n2、参与公司重要项目的建设，包括需求分析、方案设计和核心代码的编写;\n3、参与公司关键系统和平台的生产运维，提出优化建议和最佳实践，并带领团队实施落地。",
    requirement: "1、本科以上学历，互联网公司背景，8年以上工作经验；\n2、深入理解java 集合、多线程编程和JVM原理；\n3、熟悉微服务(Spring Boot/Spring Cloud等)，熟悉各种消息中间件（RabbitMQ/RocketMQ/Kafka等），熟悉Zookeeper、Etcd等服务发现和配置共享的开源项目；\n4、熟悉开源服务框架（Netty /Spring/ MyBatis /Dubbo）等；\n5、深入理解常用的缓存中间件如Redis，具备分布式缓存设计经验者；\n6、熟悉分布式消息（MQ/Kafka）并有优化经验，对搜索（ES/Solr）等机制有线上使用和优化经验；\n7、熟悉MySQL数据库及原理，熟练使用SQL语句及优化，对数据库事务、锁、索引有深入理解；\n8、熟悉常用技术和中间件，如分库分表技术、消息中间件、分布式框架等；\n9、具有丰富的微服务架构实践和优化经验，有高并发系统设计经验；\n10、具备良好的编程习惯和工程规范；\n11、有较强的业务理解能力、领域建模能力和学习能力，思路清晰、语言表达流畅；\n12、熟悉Linux环境开发，熟悉常用SHELL命令，有Docker集群落地经验。"
}, {
    name: "运维主管",
    type: 4,
    salary: "30-60K",
    responsibility: "1、负责各产品线服务器及应用的稳定、高效运行；\n2、负责各产品线服务架构评审，并能提出设计建议和规划建议；\n3、维护各项服务器及应用，持续查找并修复问题，做保障业务稳定运行的幕后英雄；\n4、及时响应各种故障报警，可以做到提前预警，能够快速解决问题恢复业务；\n5、制定运维规范和策略，并实现文档化；\n6、通过技术手段进行成本控制及优化，通过工具化及流程提升服务管理效率。",
    requirement: "1、熟悉Linux系统，8年以上Linux系统管理经验，具有线上生产环境运维经验；\n2、熟悉ELK、Prometheus、Grafana的使用及调优，熟悉redis、kafka、zookeeper、LNMP等常用服务的集群架构、部署、配置调优；\n3、熟悉虚拟化和容器技术，包括但不限于Docker、Kubernetes，了解其原理并能够熟练配置和使用；\n4、掌握Shell、Python、Golang中的至少一门语言，能够编写运维脚本；\n5、掌握DevOps等工具，持续集成相关知识，能够制定规范；\n6、具备较好的沟通能力、文档整理能力、自我驱动能力，有追求极致的责任心。"
}, {
    name: "高级运维",
    type: 4,
    salary: "30-40K",
    responsibility: "1、负责各产品线服务器及应用的稳定、高效运行；\n2、负责各产品线服务架构评审，并能提出设计建议和规划建议；\n3、维护各项服务器及应用，持续查找并修复问题，做保障业务稳定运行的幕后英雄；\n4、及时响应各种故障报警，可以做到提前预警，能够快速解决问题恢复业务；\n5、制定运维规范和策略，并实现文档化；\n6、通过技术手段进行成本控制及优化，通过工具化及流程提升服务管理效率。",
    requirement: "1、熟悉Linux系统，5年以上Linux系统管理经验，具有线上生产环境运维经验；\n2、熟悉ELK、Prometheus、Grafana的使用及调优，熟悉redis、kafka、zookeeper、LNMP等常用服务的集群架构、部署、配置调优；\n3、熟悉虚拟化和容器技术，包括但不限于Docker、Kubernetes，了解其原理并能够熟练配置和使用；\n4、掌握Shell、Python、Golang中的至少一门语言，能够编写运维脚本；\n5、掌握DevOps等工具，持续集成相关知识，能够制定规范；\n6、具备较好的沟通能力、文档整理能力、自我驱动能力，有追求极致的责任心。"
}, {
    name: "高级3D建模师",
    type: 1,
    salary: "30-50K",
    responsibility: "1、负责游戏内角色、道具及其他元素的3D模型，并配合动画设计师完成相关动画效果。",
    requirement: "1、熟悉Unity3D引擎，有过Unity3D完整项目经验，了解美术资源优化思路，善于通过引擎提升画面品质；\n2、非常熟悉3D几何学模型、动画、骨骼、绑定、权重等在实时渲染引擎的工作原理；\n3、理解如何运用手工动画针、动捕、程序生成、物理生成、动力生成等技术，制作高质量动画。"
}, {
    name: "高级视觉设计师",
    type: 3,
    salary: "30-50K",
    responsibility: "1、负责品牌VI、品牌升级优化及市场活动物料设计；\n2、负责产品的形象发展趋势，负责视觉表现落地。",
    requirement: "1、美术设计相关专业；\n2、5至7年品牌设计相关经验，有成熟的整套品牌视觉案例，可独立完成品牌视觉体系开发；\n3、有较强的平面广告/活动专题设计能力，擅长各种视觉风格表现，能够准确抓到品牌调性；\n4、对设计创作工作充满激情。"
}, {
    name: "高级交互设计师",
    type: 3,
    salary: "30-50K",
    responsibility: "1、根据产品需求，设计出适合的交互解决方案；\n2、配合开发制作，将交互功能开发上线；\n3、分析评估产品的界面设计优缺点，为产品界面开发提供参考建议或优化方向；\n4、与上下游职位良好配合，把握策划需求，向视觉设计师和程序员沟通传递设计思路。",
    requirement: "1、本科及以上学历，优秀的设计表达能力，热爱做设计；\n2、两年以上交互设计经验，熟悉手机操作系统（iOS、Andriod）交互特征，有成熟作品；\n3、学习能力强，观察力敏锐，能不断学习吸收最新流行的设计思想；\n4、具有良好的需求把握和逻辑分析能力，善于沟通表达；\n5、熟练使用Photoshop、Illustrator、Flash等相关软件，掌握流程图、线框图等交互设计方法。"
}, {
    name: "高级DBA",
    type: 0,
    salary: "40-60K",
    responsibility: "1、负责数据库性能优化：评价数据库运行状态，调整数据库参数，优化数据库性能；\n2、负责数据库设计和维护：创建和维护数据库存储结构及对象，制定数据库访问策略；\n3、负责数据库性能监控和分析：做好数据库的日志分析和数据统计分析，对数据库运行状态进行实时监控，确保数据库的可靠运行；\n4、负责数据库备份管理：制定数据库数据备份策略，保证数据的完整和安全，能够快速安全地完成数据备份与恢复；\n5、负责设计和开发数据库查询语句、视图和存储过程，审查开发人员的查询语句、视图和存储过程；\n6、负责配合研发制定数据库技术方案、分库分表策略、数据迁移方案。",
    requirement: "1、本科及以上学历，3年以上MySQL DBA经验；\n2、熟悉MySQL、Redis的体系架构，熟悉常用存储引擎的功能特点和应用场景；\n3、精通MySQL/Mongodb/Redis的备份、恢复、集群方案、主从复制的原理和实践；\n4、精通数据库的性能优化、SQL调优，对锁和事务隔离问题有深入理解；\n5、具有较强的自我驱动性，追求做事效率，善于使用工具管理自己任务者优先。"
}, {
    name: "高级UI设计",
    type: 3,
    salary: "30-60K",
    responsibility: "1、负责公司产品线的整体UI视觉设计，把握整体视觉风格，制定UI规范，产出效果图；\n2、充分理解产品需求和交互流程，与团队其他成员协作完成符合用户体验需求的产品视觉设计；\n3、跟进设计效果的实现，保证设计品质与实现品质一致；\n4、不断跟踪改进视觉原素，优化提高用户体验；\n5、与产品经理、其他设计师及开发人员紧密沟通和相互合作。",
    requirement: "1、大专及以上学历，美术相关专业且美术功底扎实，对结构、线条、色彩等的把控力强，具备较好的审美度和理解力；\n2、3年以上互联网UI设计工作经验，必须要有成熟上线的作品（投递简历同时请提供设计作品集）；\n3、熟悉网页设计规范、Android/iOS系统特性及官方设计规范，熟练使用Sketch、PS、AI、AE、Axure等相关设计工具；\n4、具有敏锐的用户体验观察力，富有创新精神；\n5、有较强的学习能力，会主动研究或学习新的技术并运用到工作中；\n6、有责任心和严谨的工作态度，工作有条理有计划，善于沟通。"
}, {
    name: "游戏音效师",
    type: 3,
    salary: "30-40K",
    responsibility: "1、负责游戏及影片中音频（音乐、音效）的设计与创作；\n2、根据要求使用效果器进行音频处理；\n3、对所需要的所有音频相关信息进行统筹、配置，管理音频素材库；\n4、与项目各方面技术人员交流和沟通，通力合作。",
    requirement: "1、有5年以上音效制作经验；\n2、精通音频软件的使用，能够熟练操作音效工具；\n3、拥有较深入的音乐理论基础，对各类型风格音乐有一定的把握与了解；\n4、有良好的音乐素养和审美；\n5、积极乐观、工作踏实、思想活跃、想象力丰富。"
}, {
    name: "设计总监",
    type: 3,
    salary: "55k-上不封顶",
    responsibility: "1、负责把控产品的视觉设计方案，负责设计团队的日常管理和设计审核，协调项目相关的设计资源，把握进度，推动视觉及交互方案的落地；\n2、跟踪互联网行业设计趋势，研究行业/竞争对手的产品设计新概念，为产品长远规划决策提供信息支持；\n3、配合市场、运营及产品团队，提出视觉、创意及交互的意见与方案 ；\n4、参与新产品功能的构思，站在用户角度提出使用习惯的需求；\n5、梳理并优化设计团队的工作流程；\n6、定义产品的设计规范，保证产品与服务体验一致性；\n7、指导从初级到高级的设计师，进行人员培养和成长管理，分享设计经验、提高团队的设计能力；\n8、协助设计师与产品、运营、研发等部门间保持良好的沟通与协作。",
    requirement: "1、全日制本科及以上学历，设计相关专业，4年以上的管理经验，有成熟的线上产品设计经验，有知名互联网任职经历优先；\n2、具备深厚的设计理论和设计功底，在用户体验设计及相关领域有深入的理解和实践，有优秀的艺术审美功底； \n3、了解国际化的设计风格，时刻关注前沿的产品设计趋势，能够独立带领团队完成从设计构思到设计表达的整个过程；\n4、能够对自身产品及行业、竞争对手的设计有较为深刻的研究和理解；\n5、沟通协作能力优秀，团队管理能力及推动执行能力突出；\n6、有良好的大局观，擅长拥抱变化；\n7、保持好奇、乐于学习、充满激情、关注细节；\n8、善于总结设计经验，并乐于分享。"
}, {
    name: "移动端总监",
    type: 0,
    salary: "55k-上不封顶",
    responsibility: "1、负责iOS/Android/Web前端的技术研发管理工作；\n2、负责指导成员进行移动平台的架构分析，持续进行架构升级，性能与技术演进；\n3、负责技术团队搭建和培养，构建技术梯队；\n4、负责推进项目流程、质量评估、人员绩效等工作；\n5、参与公司整体项目的协调、沟通与推进。",
    requirement: "1、计算机相关专业，本科及以上学历，7年以上的互联网研发经验，3年以上移动端团队管理经验；\n2、至少精通一种移动平台(Android/iOS)，同时具有良好的技术广度及全局技术设计能力，有后端开发经验加分；\n3、 熟悉主流移动端框架，如组件化、Hybrid方案等，有实践经验及选型能力；\n4、 熟悉移动端性能，质量评估及优化方式，有实践经验；\n5、 熟悉开发流程以及相关的技术架构，有实践经验。"
}, {
    name: "产品总监",
    type: 1,
    salary: "55k-上不封顶",
    responsibility: "1、负责公司彩票平台产品规划与需求分析，按版本有计划迭代产品；\n2、负责产品的功能设计及产品开发过程中的协调与沟通；\n3、推动解决系统用户体验方面的问题，提高产品的用户体验和用户粘性；\n4、在开发过程中与开发团队密切合作，跟踪开发进度，确保产品开发和测试按计划完成。",
    requirement: "1、熟悉各类官彩、各种玩法和赔率计算，并能衍生出别的不同玩法（非官方玩法）；\n2、具备自营彩票规划和玩法设计能力；\n3、有彩票系统风控规划和推进实施经验优先；\n4、具备良好的语言沟通能力和表达能力；\n5、专科及以上学历，2年以上互联网产品工作经验；\n6、对互联网产品策划、运作有了解，熟悉互联网最新产品技术的发展；\n7、精通互联网产品交互设计的相关流程，包括功能分析、用户角色分析、原型设计；\n8、做事注重细节、追求完美，具有创新精神和持续学习能力；\n9、同时拥有PC端与APP策划经验者优先；\n10、熟练使用相应软件，如Word、Visio、Axure等，有制作产品原型图并编写产品需求文档的经验。"
}, {
    name: "高级Web前端",
    type: 0,
    salary: "30-60k",
    responsibility: "1、负责产品设计的前端代码开发工作，产出原型，配合完成后端数据的接口；\n2、熟悉业务逻辑，针对不同业务需求给出前端技术解决方案并实现交互原型；\n3、负责对产品页面性能的优化和维护；\n4、负责业务平台与Web项目的开发、维护、升级，完成核心代码的编写；\n5、 和产品经理沟通并确定产品开发需求。",
    requirement: "1、计算机相关专业，5年以上工作经验；\n2、精通HTML / CSS / JavaScript等前端基础技术，了解浏览器兼容性及相关调试方法；\n3、深刻理解Web标准，对前端性能、可访问性等有实际项目经验；\n4、拥有 Angular / React / Vue 其中至少一项的实际项目经验；\n5、熟悉gulp / browserify / webpack，了解前端工程及模块化，前后端分离；\n6、有WebApp、游戏、动画、图形等开发经验优先。"
}, {
    name: "高级运维工程师/运维主管",
    type: 4,
    salary: "30-60k",
    responsibility: "1、负责各产品线服务器及应用的稳定、高效运行；\n2、负责各产品线服务架构评审，并能提出设计建议和规划建议；\n3、维护各项服务器及应用，持续查找并修复问题，做保障业务稳定运行的幕后英雄；\n4、及时响应各种故障报警，可以做到提前预警，能够快速解决问题恢复业务；\n5、制定运维规范和策略，并实现文档化；\n6、通过技术手段进行成本控制及优化，通过工具化及流程提升服务管理效率。",
    requirement: "1、熟悉Linux系统，5年以上Linux系统管理经验，具有线上生产环境运维经验；\n2、熟悉ELK、Prometheus、Grafana的使用及调优，熟悉redis、kafka、zookeeper、LNMP等常用服务的集群架构、部署、配置调优；\n3、熟悉虚拟化和容器技术，包括但不限于Docker、Kubernetes，了解其原理并能够熟练配置和使用；\n4、掌握Shell、Python、Golang中的至少一门语言，能够编写运维脚本；\n5、掌握DevOps等工具，持续集成相关知识，能够制定规范；\n6、具备较好的沟通能力、文档整理能力、自我驱动能力，有追求极致的责任心。"
}, {
    name: "高级测试工程师/测试主管",
    type: 0,
    salary: "30-60k",
    responsibility: "1、根据需求文档，制定测试策略、编写测试计划；\n2、独立负责建立产品自动化测试框架、包括服务端API/Web/移动端的自动化测试工作，控制产品质量，提高团队测试效率；\n3、负责自动化测试脚本及辅助测试工具的开发，迭代优化测试框架；\n4、主导/参与公司的大型项目的性能测试及调优工作，组织搭建公司级的自动化和性能测试平台.",
    requirement: "1、精通软件测试理论和流程，掌握单元测试、集成测试、系统测试等各阶段测试所需要的原则、流程和方法；\n2、精通主流的自动化测试工具和测试框架，如selenium、Robot、Rest-assured、httpclient、 TestNG等，同时熟悉性能测试方法及常用工具，如Load Runnder、Jmeter、Locust，具有丰富的实战经验；\n3、精通业界主流的CI/CD的工具, 如Jenkins，熟悉Linux操作系统，精通Shell脚本的编写；\n4、掌握Java、Python等编程语言，有相关编程经验优先；\n5、熟悉Tomcat、mysql等主流中间件和数据库者优先；\n6、具备云服务/大数据系统/算法测试经验者优先；\n7、本科及以上学历，计算机及相关专业，5年以上测试工作经验。"
}, {
    name: "高级视觉设计师（UI主管）",
    type: 3,
    salary: "30-60k",
    responsibility: "1、理解产品的战略意义，提出符合公司层级的产品视觉设计解决方案，并能有效推动方案落地；\n2、研究自身产品及行业竞品，提炼有效的创意点并转化到产品中；\n3、负责界面实现的最终效果，改善设计内容和督促技术人员高质量完成设计；\n4、参与整个设计阶段工作，建立设计规范，并推动统一的产品设计标准；\n5、参与团队的专业化建设，发掘和思考产品设计方向。",
    requirement: "1、5年以上一线互联网产品视觉经验，需提供作品；\n2、丰富的设计理论知识与娴熟的设计技巧，具备一定的交互设计经验；\n3、独立的项目管理能力，良好的沟通能力；\n4、能把握设计宏观发展方向及细节品质，对用户审美偏好有敏锐洞察力；\n5、擅长在平衡产品目标和用户体验的基础上，灵活提供设计方案；\n6、具备优秀的移动和web产品的视觉审美及设计能力。"
}, {
    name: "高级UE设计师/UE主管",
    type: 3,
    salary: "30-60k",
    responsibility: "1、根据产品需求和用户研究的结果，完成界面的信息架构、流程设计和原型设计，编写界面交互使用说明；\n2、对公司APP/WEB端产品持续进行设计优化，提升用户体验；\n3、对现有产品进行可用测试和评估，能够从后台数据、竞品对标、用研结果等各纬度进行综合分析，并制定有效的解决方案；\n4、关注行业内的设计趋势，积累分享设计经验，协助提升团队整体交互设计水平。",
    requirement: "1、工业设计、心理学、计算机、视觉传达专业优先；\n2、3年以上工作经验，具有完整的互联网产品设计经验，熟悉交互设计理论体系；\n3、有良好的审美视角、敏锐的洞察力及清晰专业的设计思维；\n4、同理心强烈，擅长换位及独立思考，情景还原能力强；\n5、加分项：有交互动效设计能力，视觉设计能力。"
}, {
    name: "高级游戏动效设计师",
    type: 3,
    salary: "30-60k",
    responsibility: "1、负责游戏角色动作、场景元素动画和特效的制作；\n2、配合程序完成动画的接入与调试。",
    requirement: "1、大专及以上学历，美术设计相关专业优先，三年以上游戏行业工作经验，作品优秀可放宽；\n2、熟用Spine和Dragonbone，以及AE、Principle等软件； \n3、理解人物和生物的运动规律，善于利用动作塑造角色的性格；\n4、精通2D动作的制作流程，了解并能熟练运用特效制作页面的转场；\n5、具备独立完成设计并提出专业方案的能力，有较强的综合分析能力、创新能力，能准确理解工作需求并高效完成；\n6、一定要会动画和特效制作，动画至少要会Spine软件，视频剪辑熟练者优先，有较好的手绘功底者优先；\n7、投简历时请提供具代表性的个人动画作品，欧美风格优先，有完整的项目研发经验优先。"
}, {
    name: "高级JAVA/JAVA架构师",
    type: 0,
    salary: "30-60k",
    responsibility: "1、独立完成需求的整理和软件设计； \n2、按照项目计划，按时提交高质量代码，完成开发任务；\n3、规范文档的编写、维护，以及其他与项目相关工作；\n4、帮助团队其他成员解决技术问题，进行相关技术分享。",
    requirement: "1、大学本科以上学历，计算机或相关专业，5年以上java实际项目开发经验； \n2、有扎实的Java基础，精通JVM、Java多线程，对高并发以及数据库编程有丰富的经验；\n3、熟悉主流开源应用框架，如Spring、springBoot、springMVC、MyBatis、velocity、XML、Vue、Maven等开发技术；\n4、熟悉或了解Dubbo、常用mq、微服务框架、ZooKeeper、nginx等； \n5、熟悉关系型数据库MySQL、Oracle等，以及相应数据库调优；\n6、熟悉Redis、Memcached、HBase等；\n7、熟悉分布式系统的设计和应用，熟悉分布式、缓存、消息、负载均衡等机制和实现；\n8、热爱技术，对技术有不懈的追求，喜欢研究开源代码；\n9、良好的学习能力、团队协作能力和沟通能力，善于思考，能独立分析和解决问题。"
}, {
    name: "高级产品经理",
    type: 1,
    salary: "30-60k",
    responsibility: "1、负责公司彩票产品的需求分析与功能设计； \n2、负责产品开发过程中的协调与沟通； \n3、推动解决系统用户体验方面的问题，提高产品的用户体验和用户粘性； \n4、在开发过程中与开发团队密切合作，跟踪开发进度，确保产品开发和测试按计划完成。",
    requirement: "1、熟悉各类官彩各种玩法，并能衍生出别的不同玩法（非官方玩法）； \n2、具备自营彩票规划和玩法设计能力优先；\n3、有彩票系统风控规划和推进实施经验优先；\n4、具备良好的语言沟通能力和表达能力；\n5、大专及以上学历，5年以上互联网产品工作经验；\n6、了解互联网产品交互设计的相关流程，包括功能分析、用户角色分析、原型设计；\n7、做事注重细节，具有创新精神和持续学习能力； \n8、同时拥有PC端与APP策划经验者优先；\n9、熟练使用相应软件，如Word、Visio、Axure等。"
}, {
    name: "风控主管",
    type: 2,
    salary: "30-60k",
    responsibility: "1、监控彩票开奖情况；\n2、对彩票风险注单进行排查；\n3、负责部门风控专员的工作安排与培训。",
    requirement: "1、大专以上学历，8年以上彩票运营或风控经验；\n2、良好的沟通能力、协调能力，做事清晰，做人简单；\n3、有较强的数据分析能力和信息收集能力；\n4、抗压能力强、责任心强，能接受KPI指标；\n5、熟练使用 excel 进行数据分析。"
}, {
    name: "资深数值策划",
    type: 1,
    salary: "30-60k",
    responsibility: "1、根据产品需求、玩家心理等因素设计数值体系进行数学建模；\n2、可验证数值体系的正确性、合理性、可行性；\n3、可对竞品数值分析，反推竞品数值模型；\n4、负责数值相关的方案的撰写、维护、管理工作；\n5、负责产品上线后数值验证、分析，及时发现并调整数值细节，达到运营目的。",
    requirement: "1、负责过老虎机、棋牌、电玩城类产品，从0到1开发和运营阶段；\n2、深度理解老虎机、棋牌、电玩城类产品的数值原理和设计思想；\n3、5年以上数值工作经验，至少3年主数值经验；\n4、有强烈愿望制作出高品质产品，责任心强。"
}, {
    name: "大数据开发工程师",
    type: 0,
    salary: "30-60k",
    responsibility: "1、负责公司大数据基础平台的规划、部署、管理和优化，保障平台稳定可靠高效运行；\n2、负责Hadoop、HBase、Hive、Spark、Kafka、Presto、Druid等集群的维护、 优化工作；\n3、深入理解公司大数据平台架构，发现并解决性能瓶颈，支撑业务和数据量的快速增长；\n4、开发大数据自动化运维、监控、故障处理工具，监控所有基础设施组件、应用程序，提供紧急应急措施。",
    requirement: "1、计算机专业，本科及以上学历，5年以上Hadoop生态系统开发经验；\n2、熟悉Hadoop、HBase、Kafka、Hive、Spark等组件的工作原理；\n3、搭建、调优并维护过Hive、Presto、Spark、Kafka、Redis等服务；\n4、精通一门以上脚本语言(Python、shell等），有开发经验者优先；\n5、熟悉Linux软硬件环境、系统管理和优化，有做过大数据服务监控者优先；\n6、主动性强，具有良好的沟通、协调和组织能力，富有团队精神，有较强的文档编写能力。"
}, {
    name: "数据库DBA",
    type: 0,
    salary: "30-60k",
    responsibility: "1、负责数据库的日常操作、安装、配置、监控、升级、迁移、实时备份、恢复和管理；\n2、负责数据库的运行维护及管理等工作；\n3、依据业务需求优化数据库的逻辑设计和物理设计；\n4、协助项目其他成员设计关键的SQL语句和触发器、存储过程等；\n5、通过数据库的日常检查，对性能较差的SQL语句提出优化方案。",
    requirement: "1、具备3年以上相关工作经验，本科及以上学历；\n2、具有系统（操作系统、数据库、盘阵、网络）问题诊断的能力和经验；\n3、熟练linux、unix 操作系统的基本操作，能编写shell脚本；\n4、数据库维护，能对业务需求和故障进行及时响应和处理，并进行数据库性能调优；\n5、具有数据库的逻辑设计和物理设计经验；\n6、熟悉数据库高可用部署方案；\n7、具有开源数据库，如mysql、postgresql或者大数据相关工作经验优先；\n8、有在不同数据库之间进行数据迁移经验者优先。"
}, {
    name: "产品总监",
    type: 1,
    salary: "50k-上不封顶",
    responsibility: "1、根据公司的业务需要进行B2B体育类产品的规划和设计，涉及领域包括销售系统、游戏玩法、信息数据系统等；\n2、根据公司的战略规划和业务需求分析，进行产品功能规划、流程设计和需求管理，交付产品需求文档（PRD）和原型；\n3、主导完成产品的界面、功能、流程设计，协调开发人员进行开发，推动及协调产品的开发进度、把控项目质量；\n4、分析上线产品的运营数据，定期提出产品改进意见，不断完善在线产品，持续改善用户体验；\n5、与技术、业务团队紧密配合，达成业务目标。",
    requirement: "1、统招本科以上学历，10年以上产品经验，有互联网产品经验优先，5年以上管理经验；\n2、熟悉用户心理，制定可行的产品方案并有效的执行，对相关策略有独到见解；\n3、有较强的的数据分析能力、沟通能力及组织协调能力；\n4、熟悉体育、棋牌、彩票等相关项目及产业优先。"
}, {
    name: "风控总监/专家",
    type: 2,
    salary: "50k-上不封顶",
    responsibility: "1、负责针对风控部门所需求的模型进行评估、验证、实施、监控等工作，针对所有模型进行全流程的管理；\n2、向模型开发主体、模型应用主体反馈评估、验证等信息，提出改进建议，以提高模型质量，降低模型建立和使用过程中的各项风险；\n3、主导模型风险管理系统需求的设计、拟写及系统测试、维护与优化；\n4、主导制定、落实包括套利风险、欺诈风险等在内的全面验证和风险计量管理体系。",
    requirement: "1、统招本科以上学历，统招硕士优先，要求经济学、统计学、计算机等相关专业，至少5年以上相关工作经验；\n2、有过丰富的银行、证券等金融机构风控体系搭建或风控安全系统设计并落地经验，有体育盘口风控管理经历优先。"
}, {
    name: "产品经理",
    type: 1,
    salary: "25-40k",
    responsibility: "1、根据公司的业务需要进行B2B体育类产品的规划和设计，涉及领域包括销售系统、游戏玩法、信息数据系统等;\n2、根据公司的战略规划和业务需求分析，进行产品功能规划、流程设计和需求管理，交付产品需求文档（PRD）和原型;\n3、引导完成产品的界面、功能、流程设计，协调开发人员进行开发，推动产品的开发进度，把控项目质量；\n4、分析上线产品的运营数据，定期组织分析提出产品改进意见，不断完善产品、持续改善用户体验；\n5、与技术、业务团队紧密配合，达成业务目标。",
    requirement: "1、统招本科以上学历，5年以上产品经验，有互联网产品经验优先；\n2、熟悉用户心理，制定可行的产品方案并有效执行，对相关策略有独到见解；\n3、有较强的的数据分析能力、沟通能力及组织协调能力；\n4、熟悉体育项目及产业，对体育盘口数据有一定了解优先。"
}, {
    name: "产品运营经理",
    type: 1,
    salary: "25-40k",
    responsibility: "1、负责体育项目的运营维护，采集更多体育资讯以便完善体育资料库；\n2、协助产品经理进行产品设计、功能业务操作编写等。",
    requirement: "1、统招本科以上，5年以上体育、彩票相关工作经验者优先；\n2、热爱体育行业，对国内外各大体育赛事有研究者优先；\n3、熟悉足球、篮球、电竞等主流运动；\n4、富有创造力和激情，并有动手实践的良好习惯，有较强逻辑思维能力 。"
}, {
    name: "产品运营专员",
    type: 1,
    salary: "12-25k",
    responsibility: "1、负责体育项目的运营维护，采集更多体育资讯以便完善体育资料库；\n2、协助产品经理进行产品设计、功能业务操作编写等。",
    requirement: "1、大学本科以上，优秀应届毕业生及有体育、彩票相关工作经验者皆可；\n2、热爱体育行业，对国内外各大体育赛事有研究者优先；\n3、具备高度的责任心、良好的团队合作精神，良好的领悟力和沟通能力。"
}, {
    name: "高级前端工程师",
    type: 0,
    salary: "25-45k",
    responsibility: "1、负责建设体育生态的前端系统架构；\n2、为用户呈现最好的界面交互体验；\n3、指导初级工程师进行开发 。",
    requirement: "1、统招本科以上学历，7年以上前端开发经验，有大中型前端项目的开发、维护、重构经验；\n2、扎实的原生JavaScript 基础，熟练掌握 Vue、React、Angular 任一开发框架；\n3、熟练使用常用的开发工具：git、IDE、Chrome Dev Tool、Postman等；\n4、熟悉浏览器渲染原理以及前端性能优化，对前端的模块化、组件化、工程化有一定的实践经验；\n5、熟悉常用数据结构、Http协议；\n6、熟悉Node.js、Nginx、Linux等技术者优先考虑。"
}, {
    name: "java架构师",
    type: 0,
    salary: "35-50k",
    responsibility: "1、参与公司平台技术架构的研究，并进行技术落地;\n2、参与公司重要项目的建设，包括需求分析、方案设计和核心代码的编写;\n3、参与公司关键系统和平台的生产运维，提出优化建议和最佳实践，并带领团队实施落地。",
    requirement: "1、8年以上Java应用开发经验，精通Java语言以及J2EE平台特性，熟悉常用的设计模式和开源框架，有大型互联网项目经验或业内知名产品研发经验者优先；\n2、精通领域建模能力，能够为复杂业务提供解决方案，能够从抽象业务提炼出通用解决方案的概括能力;\n3、精通MySQL、Oracle中的一个，MySQL优先；\n4、熟悉Linux环境及操作，熟悉Tomcat、Apache、Nginx等开源的服务器的配置和调优；\n5、熟悉以下技术领域中的若干项，经验丰富者优先：\n（1）分布式系统基础设施中常用的技术，如缓存（Varnish、Redis）、消息中间件(Rabbit MQ、Kafka、RocketMQ)、搜索引擎(Elasticsearch、Lucence）等；\n（2）高并发、高可靠性系统的设计、监控和运维，如负载均衡系统、集群和应用监控、系统容量评估、流量控制、性能优化、故障排查、日志收集和分析等；\n（3）分布式存储和分布式计算，如Hadoop HDFS、FastDFS、HBase、Hive等；\n（4）微服务，服务治理，SpringCloud技术栈或服务调用框架；\n（5）Docker、虚拟化、弹性计算、自动化运维相关的技术。"
}, {
    name: "高级运维工程师",
    type: 4,
    salary: "30-35k",
    responsibility: "1、设计和实施 CI/CD 系统，搭建自动化测试平台、代码质量管理等系统；\n2、完善服务监控体系，使用 New Relic、Pingdom、PagerDuty 等工具做好报警通知；\n3、研发自动化运维平台，提高运维、开发协作效率，规范操作流程；\n4、负责系统的 SLA 代码维护、迭代更新，保证任务质量和交付及时性；\n5、负责编写相关的技术文档，对产品质量负责。",
    requirement: "1、本科及以上学历，计算机或相关专业，8年以上应用运维实战经验；\n2、熟悉脚本编程语言Bash、Python中的一种，并有相关开发经验；\n3、熟悉Docker容器原理和使用、熟悉镜像制作与管理，熟悉Kubernetes、Swarm等容器编排工具使用，有生产环境实践经验者优先；\n4、熟练掌握主流应用服务器架构体系、数据库以及各种中间件技术（LVS/Nginx/Haproxy/Tomcat/MySQL/DNS/Redis/Kafka/MongoDB/Hadoop生态圈等），对运维体系有深入的理解和研究；\n5、熟悉HTTP/HTTPS、TCP/IP等常见协议（栈）；\n6、熟悉常用的批量操作工具Ansible、Saltstack，Puppet；\n7、熟悉常用的监控系统，如 Zabbix、Prometheus 或Open-falcon等；\n8、熟悉日志搜索与分析工具，如ELK Stack；\n9、熟悉Jenkins，对CI/CD流程有实践经验；\n10、熟悉KVM虚拟化原理与使用；\n11、精通分布式调用链监控（Zipkin、Cat、Pinpoint等）或微服务管理优先。"
}, {
    name: "体育操盘手",
    type: 2,
    salary: "30k",
    responsibility: "1、收集各大官网赛事赛程，以及各大国际网赛事赛程，整理并确认；\n2、根据赛场上的情况调整盘口水位，控制货量，对客户进行诱盘；\n3、对于热点投注时间和非热点投注时间的盘口水位异动，做出及时判断与处理；\n4、对事件进行风控审核，及时处理异常事件；\n5、参与对新入职的员工进行相关的培训；\n6、与其他相关部门协作，为完善后台的各项功能需求提一些建设性意见。",
    requirement: "1、大专及以上学历；\n2、熟悉各大体育赛事，对主流大联赛有自己独特的见解；\n3、熟悉体育比赛的盘口、水位以及多种玩法，有1-3年或以上相关操盘经验；\n4、逻辑思维强，对数字敏感，对市场有敏锐的观察力以及处理紧急情况的应变能力；\n5、熟悉了解风控的流程，对风控的事件有一定的敏锐度；\n6、学习能力强，能服从公司和上级安排。"
}, {
    name: "体育操盘手",
    type: 2,
    salary: "10-20k",
    responsibility: "1、准确执行交易指令，严格执行交易员手册；\n2、独立完成大资金账户操作；\n3、上级安排的其他工作。",
    requirement: "1、年龄22-35岁之间，统招大专以上学历；\n2、2年以上的操盘经验；\n3、可接受优秀的应届毕业生，但是必须是金融学、统计学、数学或经济类相关专业；\n4、能承受较强的心里压力；\n5、有强大的数据运算能力以及宏观经济数据分析能力。"
}, {
    name: "数据分析师",
    type: 2,
    salary: "20-30k",
    responsibility: "1、基于业务场景，构建业务指标体系，建立和完善日常业务报告体系，能够及时、准确、完整的披露公司整体及各项目的运营现状；\n2、基于数据，洞察产品运营状况，找出问题，分析原因，提供建议；\n3、对特定业务主题进行分析，为业务决策提供数据支持及行动建议；\n4、能够持续动态的挖掘日常的业务数据，发现业务的风险和机会点。",
    requirement: "1、统招本科学历，统计学、经济学等相关专业；\n2、对数据特别敏感，有过金融分析师、证券分析师经历优先；\n3、熟悉并热衷于互联网产品，对业务有敏锐的观察力和数据洞见；\n4、了解常用的产品数据分析方法，如漏斗分析、路径分析、热点分析及精准营销、交叉销售等业务导向分析方法；\n5、精通Excel、SQL、hadoop、Hive等数据处理工具，有构建海量数据的数据仓库经验优先，有Tableau开发经验优先；\n6、对数字有敏锐的观察力，喜欢和数字打交道，严谨细致，有较强的分析能力、逻辑推理能力；\n7、有较强的书面及口头表达能力，具有较强的自主学习能力，乐于接受挑战；\n8、有责任心、具有团队合作精神，能承受一定的工作压力。"
}, {
    name: "招聘专员",
    type: 6,
    salary: "12-15k",
    responsibility: "1、全面负责公司人才的招聘工作；\n2、根据现有编制及业务发展需求，协助上级确定招聘目标；\n3、汇总岗位需求数目和人员需求数目，制定并执行招聘计划；\n4、发布职位需求信息，做好公司形象宣传；\n5、搜集各地区人才市场信息。",
    requirement: "1、高中及以上学历, 人力管理及相关专业；应届生优先，有无行业经验均可；\n2、较强的综合分析能力、沟通协调能力、组织规划能力；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力；\n5、能熟练使用电脑及各种办公软件，具备基本的网络知识；\n6、有国内、外籍招聘工作经验优先。"
}, {
    name: "招聘组长",
    type: 6,
    salary: "15-20k",
    responsibility: "1、全面负责公司人才的招聘工作；\n2、根据现有编制及业务发展需求，协助上级确定招聘目标；\n3、汇总岗位需求数目和人员需求数目，制定并执行招聘计划；\n4、组建招聘小组团队；\n5、带领团队完成部门既定目标。",
    requirement: "1、高中及以上学历,一年以上招聘经验；\n2、较强的综合分析能力、沟通协调能力、组织规划能力；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力；\n5、能熟练使用电脑及各种办公软件，具备基本的网络知识。"
}, {
    name: "招聘主管",
    type: 6,
    salary: "20-30k",
    responsibility: "1、全面负责公司人才的招聘工作；\n2、根据现有编制及业务发展需求，协助上级确定招聘目标；\n3、汇总岗位需求数目和人员需求数目，制定并执行招聘计划；\n4、组建招聘团队；\n5、引导团队向正确方向发展。",
    requirement: "1、大专及以上学历,一年以上团队管理经验；\n2、较强的综合分析能力、沟通协调能力、组织规划能力；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力；\n5、能熟练使用电脑及各种办公软件，具备基本的网络知识。"
}, {
    name: "部门助理",
    type: 6,
    salary: "12-18k",
    responsibility: "1、协助人资、行政、后勤、财务、业务等部门（任选）的部门工作；\n2、协助处理部门内部人员入职、离职、调动等文件交接；\n3、登记部门内部财务支出状况；\n4、完成领导交付的其他相关工作。",
    requirement: "1、高中及以上学历,为人诚实可靠，女生优先；\n2、熟悉使用Excel、Word等常规办公软件，具备基本的网络知识；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力。"
}, {
    name: "行政专员",
    type: 6,
    salary: "10-15k",
    responsibility: "1、负责公司行政管理服务，主要为办公场地管理及车辆管理；\n2、职能细分如驻场行政的驻场部门有夜班则需要上夜班；\n3、灵活处理办公场地突发事件，负责公司各类会议的组织、安排、服务工作；\n4、完成领导交付的其他相关工作。",
    requirement: "1、学历相当于国内高中以上；\n2、英语要求基本口语交流无障碍；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力；\n5、能熟练使用电脑及各种办公软件，具备基本的网络知识。"
}, {
    name: "后勤专员",
    type: 6,
    salary: "10-15k",
    responsibility: "1、负责公司宿舍区域管理服务，主要为员工宿舍管理及员工搬入搬出；\n2、灵活处理宿舍区域突发事件，需要倒班，女生可协商无夜班；\n3、完成领导交付的其他相关工作。",
    requirement: "1、学历相当于国内高中以上；\n2、英语要求基本口语交流无障碍，有服务经验优先；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力；\n5、能熟练使用电脑及各种办公软件，具备基本的网络知识。"
}, {
    name: "行政组长",
    type: 6,
    salary: "15-20k",
    responsibility: "1、负责公司行政管理服务，主要为办公场地管理及车辆管理；\n2、管理组内成员，处理好组员排班情况，通知类上传下达；\n3、灵活处理办公场地突发事件，负责公司各类会议的组织、安排、服务工作；\n4、完成领导交付的其他相关工作。",
    requirement: "1、学历相当于国内高中以上，一年以上行政管理经验；\n2、英语要求基本口语交流无障碍；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力；\n5、能熟练使用电脑及各种办公软件，具备基本的网络知识。"
}, {
    name: "后勤组长",
    type: 6,
    salary: "15-20k",
    responsibility: "1、负责公司宿舍区域管理服务，主要为员工宿舍管理及员工搬入搬出；\n2、管理组内成员，处理好组员排班情况，通知类上传下达；\n3、灵活处理宿舍区域突发事件，需要倒班，女生可协商无夜班；\n4、完成领导交付的其他相关工作。",
    requirement: "1、学历相当于国内高中以上，一年以上行政管理经验；\n2、英语要求基本口语交流无障碍，有服务经验优先；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力；\n5、能熟练使用电脑及各种办公软件，具备基本的网络知识。"
}, {
    name: "行政主管",
    type: 6,
    salary: "20-30k",
    responsibility: "1、负责集团行政部场地行政统筹工作；\n2、负责行政场地全部行政人员-文员，组长及菲籍的考勤统计，薪资发放，KPI提交相关工作；\n3、负责场地行政内部门间及对外沟通协调工作；\n4、负责行政部门内部各部门工作配合等相关工作。",
    requirement: "1、相当于国内大学本科同等学历，能够熟练的与外籍人员交流；\n2、有行政相关工作3-5年,2年以上行政管理经验；\n3、有海外行政管理经验者为佳。"
}, {
    name: "后勤主管",
    type: 6,
    salary: "20-30k",
    responsibility: "1、负责集团行政部场地行政统筹工作；\n2、负责员工宿舍场地全部后勤人员-文员，组长及菲籍的考勤统计，薪资发放，KPI提交相关工作；\n3、负责场地后勤内部门间及对外沟通协调工作；\n4、负责后勤部门内部各部门工作配合等相关工作。",
    requirement: "1、相当于国内大学本科同等学历，能够熟练的与外籍人员交流；\n2、有行政相关工作3-5年,2年以上行政管理经验；\n3、有海外酒店管理经验者为佳。"
}, {
    name: "专线专员",
    type: 6,
    salary: "10-15k",
    responsibility: "1、协助行政、后勤、人资、网络安全等部门（任选）的部门客服工作；\n2、线上解决其他部门的同事与本部门联系之间的沟通疑问；\n3、协调本部门人员协助处理其他部门的同事与本部门之间的问题；\n4、特定部门工作需要倒班。",
    requirement: "1、大专及以上学历，女生优先；\n2、工作细心，具有服务意识，工作主动积极；\n3、有客服相关经验或者酒店前台等服务经验优先考虑。"
}, {
    name: "专线组长",
    type: 6,
    salary: "15-20k",
    responsibility: "1、检查常规工作，线上服务水平；\n2、对自己组内员工充分了解，包括业务能力和情感动态；\n3、有客服以及服务行业等着管理思维方式，培养新人，重视团队内部建设；\n4、发挥积极因素，而非负能量，带动整个团队进步。",
    requirement: "1、学历相当于国内大专以上，有客服经验、一年以上行政管理经验；\n2、英语要求基本口语交流无障碍；\n3、书面表达能力能承受较强的工作压力；\n4、办事思路缜密、细心，具有较强的责任心，富有亲和力；\n5、能熟练使用电脑及各种办公软件，具备基本的网络知识。"
},];
