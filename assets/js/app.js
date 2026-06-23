    const itinerary = [
      { day: 1, date: "6月27日 週六", plan: "香港 → 成田機場 → Skyliner → 秋葉原酒店辦理入住", base: "秋葉原", strategy: "到埗日休息。", row: "" },
      { day: 2, date: "6月28日 週日", plan: "秋葉原電器街 ＋ 上野 ＋ 阿美橫町購物街 ＋ 御徒町", base: "秋葉原", strategy: "原區輕鬆熟習，大雨可退守室內商場。", row: "" },
      { day: 3, date: "6月29日 週一", plan: "Chiikawa Park ＋ 池袋 Sunshine City ＋ 澀谷 PARCO / 宮下公園", base: "秋葉原", strategy: "平日避人潮。今日專心角色店、池袋與澀谷購物，不排展望台。", row: "row-indigo" },
      { day: 4, date: "6月30日 週二", plan: "雨早上先銀座/東京站室內 → 築地 ＋ 東京鐵塔下午散策", base: "秋葉原", strategy: "早上有雨先退守室內；雨弱後再做築地、增上寺、芝公園東京鐵塔。", row: "" },
      { day: 5, date: "7月1日 週三", plan: "東京迪士尼海洋全日爆玩", base: "秋葉原", strategy: "固定門票日。帶雨具，室內表演/餐廳與官方應用程式/DPA 作雨天防線。", row: "row-disney" },
      { day: 6, date: "7月2日 週四", plan: "春日部小新 → 晴空塔 Solamachi 雨天避難購物晚餐", base: "秋葉原", strategy: "春日部輕量化；若驟雨變強，提早轉 Solamachi 室內商場。", row: "row-amber" },
      { day: 7, date: "7月3日 週五", plan: "銀座精品百貨 ＋ 有樂町 ＋ 東京車站一番街拉麵街", base: "秋葉原", strategy: "強雨天無敵日。全日連通地下街與大型室內。", row: "" },
      { day: 8, date: "7月4日 週六", plan: "明治神宮 ＋ 原宿竹下通 ＋ 表參道 ＋ 新宿夜購", base: "秋葉原", strategy: "週末先走大空間神宮/表參道，傍晚轉新宿百貨與夜景。", row: "" },
      { day: 9, date: "7月5日 週日", plan: "轉酒店（的士大移防）＋ 日本橋/東京站輕鬆熟習", base: "日本橋", strategy: "轉酒店不排預約景點，先安頓行李與新住宿基地。", row: "row-indigo" },
      { day: 10, date: "7月6日 週一", plan: "teamLab Borderless 早場 ＋ 麻布台 Hills 沉浸式約會日", base: "日本橋", strategy: "早上入場，接近預留一整日慢慢看展與拍照。晚上早回酒店為富士山蓄力。", row: "row-indigo" },
      { day: 11, date: "7月7日 週二", plan: "澀谷購物 ＋ Shibuya Sky 15:40 已購票入場", base: "日本橋", strategy: "Shibuya Sky 已買7月7日15:40門票。當日固定保留；富士山改由第12-14日搶好天窗口。", row: "row-indigo dynamic-day", dynamic: true },
      { day: 12, date: "7月8日 週三", plan: "富士山 / 河口湖絕景全景一日遊", base: "日本橋", strategy: "富士山第一好天候補日。若雲厚或大雨，與第14日市區緩衝互換。", row: "row-rose dynamic-day", dynamic: true },
      { day: 13, date: "7月9日 週四", plan: "鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", base: "日本橋", strategy: "次要好天優先日。沿海暴雨強風時隨時與第14日互換。", row: "row-amber dynamic-day", dynamic: true },
      { day: 14, date: "7月10日 週五", plan: "合羽橋 ＋ 蔵前 ＋ 清澄白河 ＋ 新宿購物緩衝", base: "日本橋", strategy: "終極天氣緩衝日。若第12或13日天氣差，今日優先補富士山或鎌倉；若已完成就做市區咖啡與新宿購物。", row: "row-emerald dynamic-day", dynamic: true },
      { day: 15, date: "7月11日 週六", plan: "東京站/日本橋伴手禮最後大追加 ＋ 回酒店執行李", base: "日本橋", strategy: "專注百貨公司打包手信，為回程做準備。", row: "" },
      { day: 16, date: "7月12日 週日", plan: "日本橋酒店退房｜都營淺草線直達成田機場T2｜回港", base: "—", strategy: "人形町站 Access 特急直達機場。", row: "" }
    ];

    const details = [
      {
        day: 1,
        title: "6月27日（週六）｜香港 → 成田 → 秋葉原酒店",
        mood: "city",
        type: "抵達日",
        pace: "輕量",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=300&q=70",
        open: true,
        focus: "到埗日只處理入境、交通卡/eSIM、Skyliner 與酒店入住，不排景點，讓身體先適應東京節奏。",
        transport: "成田T2 → 京成 Skyliner 至京成上野 → 行李多建議短程的士到秋葉原北 Livemax 酒店；想省錢可轉日比谷線至仲御徒町/秋葉原。",
        timeline: ["06:15 抵香港機場 T2 U 區", "09:15 UO848 起飛", "14:45 抵成田T2", "16:15-17:45 Skyliner 入市區", "18:00 前後酒店辦理入住，晚上秋葉原簡單晚餐"]
      },
      {
        day: 2,
        title: "6月28日（週日）｜秋葉原 ＋ 上野 ＋ 阿美橫町",
        mood: "city",
        type: "原區熟習",
        pace: "輕鬆購物",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "第一個完整日留在酒店附近與上野線上活動，熟悉車站、便利店、藥妝與退稅流程；下雨也容易退守室內。",
        transport: "秋葉原北 Livemax 酒店可步行到秋葉原電器街；秋葉原/御徒町/上野之間用 JR 山手線或直接步行串起，減少轉車壓力。",
        timeline: ["10:00 秋葉原電器街慢逛", "12:30 上野午餐", "14:00 阿美橫町與御徒町購物", "17:30 回秋葉原放低戰利品", "晚上視體力補逛 Yodobashi / Animate"]
      },
      {
        day: 3,
        title: "6月29日（週一）｜Chiikawa Park ＋ 池袋 ＋ 澀谷購物",
        mood: "fun",
        type: "預約重點",
        pace: "中高",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "以預約型景點為核心。Chiikawa Park 若未搶到票，改為 Sunshine City / Animate / Pokemon Center。今日只做池袋與澀谷購物，不趕展望台。",
        transport: "秋葉原站 JR 山手線到池袋；池袋到澀谷可用 JR 埼京線或副都心線。晚餐後用山手線或銀座線回秋葉原。",
        timeline: ["10:30 池袋 Sunshine City / 角色商店", "Chiikawa Park 按預約時段入場", "15:30 前往澀谷 PARCO / 宮下公園 / Scramble Square", "18:00 澀谷晚餐與甜品", "20:00 左右回秋葉原，不硬排展望台"]
      },
      {
        day: 4,
        title: "6月30日（週二）｜築地市場 ＋ 增上寺 ＋ 芝公園東京鐵塔",
        mood: "food",
        type: "美食散策",
        pace: "中等",
        image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "早上若下雨，不硬衝築地與東京鐵塔戶外位；先用銀座/東京站地下街、百貨或咖啡店做室內開局，雨弱後再轉築地、增上寺、芝公園東京鐵塔。",
        transport: "秋葉原/仲御徒町上日比谷線到築地；築地到大門/芝公園可用日比谷線轉都營線，或短程的士節省體力。",
        timeline: ["09:30 雨天先銀座/東京站室內咖啡或百貨", "11:30 雨弱後移動至築地場外市場早午餐", "13:30 增上寺 / 芝公園", "15:00 東京鐵塔外拍或室內觀景候補", "晚上秋葉原/上野簡單晚餐"]
      },
      {
        day: 5,
        title: "7月1日（週三）｜東京迪士尼海洋全日",
        mood: "fun",
        type: "重點樂園",
        pace: "高",
        image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=300&q=70",
        open: true,
        focus: "V12.1 最大新增日。官方 2026/7/1 開放 9:00-21:00，成人一日護照門票 7,900円；此日固定性高，不建議隨便對調。若有微雨，改用雨衣、防水袋、室內表演/餐廳與官方應用程式/DPA 控節奏。",
        transport: "早到首選鐵路：酒店 → 仲御徒町/秋葉原 → 日比谷線八丁堀 → JR 京葉/武藏野線舞濱 → 迪士尼度假區線到東京迪士尼海洋站。巴士可作少轉乘方案，但官方秋葉原巴士約50-60分鐘，班次要另查。",
        timeline: ["06:25-06:40 酒店出發", "07:45 目標抵達入園排隊", "入園即開官方應用程式購買 DPA / 查優先通行服務", "上午優先 Fantasy Springs 熱門項目", "20:45-21:30 視體力看 Believe! Sea of Dreams 或提早離園"]
      },
      {
        day: 6,
        title: "7月2日（週四）｜春日部小新 → 晴空塔 Solamachi",
        mood: "fun",
        type: "動漫朝聖",
        pace: "中等",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "春日部移動日改良：回程不回秋葉原，直接沿東武線到押上/晴空塔晚餐。若第6日有驟雨，春日部只做核心點，提早用 Solamachi 作室內避雨與晚餐基地。",
        transport: "仲御徒町/秋葉原 → 北千住 → 東武晴空塔線至春日部。回程由春日部乘東武晴空塔線直達押上，逛 Solamachi 後再回秋葉原。",
        timeline: ["09:30 出發往春日部", "11:00 春日部站 / LaLa Garden 小新核心點", "14:00 若天氣穩定才加春日部街區慢行", "16:00-17:00 視雨勢提早東武線到押上", "晚上 Solamachi 室內購物晚餐後回秋葉原"]
      },
      {
        day: 7,
        title: "7月3日（週五）｜銀座 ＋ 有樂町 ＋ 東京車站一番街",
        mood: "food",
        type: "雨天強項",
        pace: "中等",
        image: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "強雨天也能成立的一天：百貨、地下街、東京站一番街與拉麵街連續度高，適合補買精品、伴手禮與角色商品。",
        transport: "秋葉原到銀座可用日比谷線直達銀座；銀座、有樂町、東京站之間可步行或用 JR 一站，雨大時優先走地下通道。",
        timeline: ["10:30 銀座百貨與品牌店", "13:00 有樂町午餐/商場", "15:30 東京站一番街角色街", "18:00 東京拉麵街晚餐", "晚上 JR / 日比谷線回秋葉原"]
      },
      {
        day: 8,
        title: "7月4日（週六）｜明治神宮 ＋ 原宿 ＋ 表參道 ＋ 新宿夜購",
        mood: "nature",
        type: "週末散步",
        pace: "中等",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "週末避開狹窄室內長排隊，早上先到明治神宮遮蔭散步，下午原宿/表參道，傍晚轉新宿 Isetan / Lumine / NEWoMan 做第一輪百貨購物。",
        transport: "秋葉原 JR 山手線到原宿；原宿、明治神宮前、表參道可步行串連。表參道到新宿可用 JR 山手線或副都心線轉乘；晚上由新宿 JR 直回秋葉原。",
        timeline: ["09:30 明治神宮與代代木公園外圍", "12:00 原宿午餐", "13:30 竹下通 / 貓街快速掃街", "15:30 表參道咖啡與選物店", "17:30 新宿伊勢丹 / Lumine / NEWoMan 夜購", "晚上回秋葉原收拾轉酒店前行李"]
      },
      {
        day: 9,
        title: "7月5日（週日）｜轉酒店 ＋ 日本橋/東京站輕鬆熟習",
        mood: "fun",
        type: "換基地",
        pace: "低壓",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "轉酒店日不再安排 teamLab 或其他重預約景點。今日重點是順利搬行李、熟習日本橋/人形町生活圈、補午餐與輕鬆購物。",
        transport: "秋葉原北 Livemax 酒店 → 的士至堀留 Villa 酒店寄存行李。之後以日本橋、東京站、人形町步行圈為主；買重物可先回酒店放低。",
        timeline: ["10:00 舊酒店退房", "10:15-10:45 的士轉移行李並寄存", "12:00 日本橋/人形町午餐", "14:00 東京站一番街或日本橋百貨輕鬆逛", "17:00 後回堀留 Villa 酒店辦理入住"]
      },
      {
        day: 10,
        title: "7月6日（週一）｜teamLab Borderless 早場 ＋ 麻布台 Hills",
        mood: "fun",
        type: "沉浸約會",
        pace: "接近全日",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "teamLab Borderless 不應塞在轉酒店日。今日改為早上入場，預留接近一整日慢慢看展、拍照、休息與麻布台 Hills 約會散策。",
        transport: "堀留 Villa 酒店 → 人形町/小傳馬町一帶 → 日比谷線到神谷町，步行接麻布台 Hills / teamLab Borderless。回程同線回日本橋，晚上不要排太夜，為翌日 Shibuya Sky 保留體力。",
        timeline: ["09:00-09:30 日本橋出發往神谷町", "10:00 teamLab Borderless 早場入場", "12:30-13:30 麻布台 Hills 午餐休息", "14:00-16:30 回展區或慢逛麻布台/六本木周邊", "18:00 前後回日本橋，早休息準備第11日澀谷展望台"]
      },
      {
        day: 11,
        title: "7月7日（週二）｜澀谷 ＋ Shibuya Sky 15:40 已購票",
        mood: "fun",
        type: "展望台約會",
        pace: "中等",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "Shibuya Sky 已買 7月7日 15:40 入場票。白天用澀谷室內購物慢慢鋪排，15:00 前到 Shibuya Scramble Square 找入口；若強風雨影響露天區，仍保留室內展望、商場與餐廳作備案。",
        transport: "日本橋/人形町出發，可用銀座線、半藏門線或 JR 轉乘到澀谷。建議 13:30-14:00 抵達澀谷，先午餐/寄物/熟習入口，再準時入場。",
        timeline: ["11:30 日本橋出發往澀谷", "12:30 澀谷 PARCO / Scramble Square 午餐購物", "14:45 到 Shibuya Scramble Square，先找入口與整理票券", "15:40 Shibuya Sky 已購票入場", "17:30 後澀谷晚餐或轉新宿，之後回日本橋"]
      },
      {
        day: 12,
        title: "7月8日（週三）｜富士山 / 河口湖",
        mood: "nature",
        type: "好天優先",
        pace: "高",
        image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "Shibuya Sky 已放在第11日，富士山改成第12日第一候補。若雲層厚、雨大或能見度低，直接與第14日市區緩衝互換，不要硬上看不到山的一日遊。",
        transport: "若巴士團新宿集合：由馬喰橫山搭都營新宿線至新宿，另預留20分鐘找西口集合點。若集合地改為東京站，則由日本橋步行/的士更簡單。",
        timeline: ["06:15-06:25 酒店出門", "07:15-07:30 新宿或東京站集合", "新倉山、忍野八海、大石公園視所選團而定", "18:30-20:00 回到市區", "晚上直接回日本橋休息"]
      },
      {
        day: 13,
        title: "7月9日（週四）｜鎌倉 / 江之島",
        mood: "nature",
        type: "沿海一日遊",
        pace: "高",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "次要好天優先日。海邊強風雨時與第14日購物緩衝互換；若天氣好，早出發會舒服很多。",
        transport: "自助最順：步行至新日本橋站，乘 JR 總武快速 / 橫須賀線直達鎌倉。再接江之電到長谷、鎌倉高校前、江之島。",
        timeline: ["08:30-09:00 日本橋出發", "10:00 鎌倉站 / 小町通", "11:30 鶴岡八幡宮", "13:30 長谷大佛與江之電沿海段", "16:30 江之島或湘南海岸視天氣決定"]
      },
      {
        day: 14,
        title: "7月10日（週五）｜合羽橋 / 蔵前 / 清澄白河 ＋ 新宿購物緩衝",
        mood: "buffer",
        type: "終極緩衝",
        pace: "彈性",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "終極天氣緩衝日。若富士山或鎌倉前面因天氣未完成，今天優先補回；若兩個戶外日都完成，就做合羽橋、蔵前、清澄白河咖啡散步，傍晚加新宿百貨補購物。",
        transport: "市區線：人形町/小傳馬町出發，視當日路線用淺草線、大江戶線與短程的士組合。新宿線：馬喰橫山/岩本町一帶搭都營新宿線直達新宿。",
        timeline: ["10:30 合羽橋道具街或補富士山/鎌倉", "12:30 蔵前午餐/咖啡", "15:00 清澄白河咖啡區或轉新宿百貨", "17:30 新宿 Isetan / Lumine / NEWoMan 補購物", "晚上回日本橋整理戰利品"]
      },
      {
        day: 15,
        title: "7月11日（週六）｜東京站/日本橋手信 ＋ 執行李",
        mood: "city",
        type: "收尾整理",
        pace: "輕鬆",
        image: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "最後完整日專注百貨、手信、退稅與行李重量控制，不再跨區奔走，為翌日回程降低風險。",
        transport: "堀留 Villa 酒店可步行/短程車到人形町、日本橋、東京站。買重物後先回酒店放低，再決定是否補最後一輪。",
        timeline: ["10:30 日本橋百貨/藥妝", "12:30 東京站午餐與伴手禮", "15:30 回酒店整理行李", "17:30 最後補買缺口", "晚上早回酒店完成打包"]
      },
      {
        day: 16,
        title: "7月12日（週日）｜日本橋 → 成田T2 → 回港",
        mood: "buffer",
        type: "回程日",
        pace: "穩陣",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=300&q=70",
        open: true,
        focus: "回程日不排景點。保留退稅、行李、安檢及機場購物時間，避免最後一日交通壓力。",
        transport: "堀留 Villa 酒店 → 人形町站 → 都營淺草線直通京成 Narita Sky Access / Access 特急到成田機場T2。注意 Skyliner 不經人形町。",
        timeline: ["10:30 最後檢查行李與護照", "12:15-12:30 市區出發", "13:45-14:00 抵成田T2", "17:05 UO871 起飛", "21:00 抵香港T1"]
      }
    ];

    const dayGuides = {
      1: {
        budget: { total: "約 ¥4,500-7,500 / 人 + 晚餐", lines: ["Skyliner + JR/地鐵約 ¥2,600-2,700；短程的士到酒店約 ¥1,500-2,500 / 車。", "晚餐建議 ¥1,200-2,500 / 人；便利店補水/早餐約 ¥800-1,500。", "費用以 2026 出發前官方與 Google 地圖顯示為準。"] },
        transportSteps: ["成田T2 入境後先處理 eSIM / Suica / Skyliner。", "Skyliner 到京成上野或日暮里，再用 JR/的士到秋葉原北。", "行李多直接的士到秋葉原北 Livemax 酒店，今天不省這段體力。"],
        food: ["秋葉原：拉麵、牛丼、壽司郎/迴轉壽司，選不用排隊的。", "便利店買水、早餐、濕紙巾；回酒店前先補齊。", "如果太累，直接附近商場或車站便當。"],
        ready: ["護照、入境 QR、酒店地址截圖。", "Skyliner / IC 卡付款方式。", "Google 地圖先收藏酒店與京成上野。"]
      },
      2: {
        budget: { total: "約 ¥3,500-8,000 / 人 + 購物", lines: ["市區交通約 ¥300-700；步行可壓低成本。", "午晚餐約 ¥2,500-5,000；藥妝/電器另計。", "若一天搭多次東京 Metro / 都營地鐵，可比較 24小時地鐵券 ¥1,000。"] },
        transportSteps: ["秋葉原、御徒町、上野可 JR 一兩站或直接步行串起。", "買重物先回酒店放低，再出第二輪。", "雨大時優先 Yodobashi、atre、上野商場與地下通道。"],
        food: ["阿美橫町：海鮮丼、串燒、街頭小食。", "上野：洋食、拉麵、甜品咖啡都多。", "秋葉原晚餐：拉麵、燒肉、牛丼，選離酒店近的。"],
        ready: ["列好藥妝/電器清單和退稅護照。", "確認酒店附近超市/便利店。", "第一天不要買太多大件。"]
      },
      3: {
        budget: { total: "約 ¥6,000-15,000 / 人 + 角色商品", lines: ["交通約 ¥600-1,000；池袋到澀谷可 JR/副都心線。", "Shibuya Sky 已移到7月7日，今日不用計展望台入場。", "Chiikawa Park / 角色商品按實際抽選與購買控制預算。"] },
        transportSteps: ["秋葉原 → 池袋：JR 山手線最簡單。", "池袋 → 澀谷：JR 埼京線/山手線或副都心線。", "澀谷只做購物、晚餐和甜品，不趕 Shibuya Sky 入場。"],
        food: ["池袋 Sunshine City：午餐選商場餐廳，穩定少風險。", "澀谷：PARCO / Scramble Square 餐廳，適合慢慢晚餐。", "甜品：宮下公園 / 澀谷咖啡店作休息點。"],
        ready: ["Chiikawa 票/抽選截圖。", "澀谷購物清單與晚餐候補。", "角色商品優先清單，避免失控。"]
      },
      4: {
        budget: { total: "約 ¥5,000-10,000 / 人", lines: ["地鐵/JR 約 ¥500-900；短程的士備用約 ¥1,500-2,500 / 車。", "築地早午餐約 ¥2,500-5,000；咖啡/甜品約 ¥800-1,500。", "東京鐵塔若入場需另計門票，純外拍免費。"] },
        transportSteps: ["早上雨勢明顯時，先秋葉原 → 銀座/東京站地下街，用百貨、咖啡店或東京站一番街開局。", "雨弱後再去築地；築地 → 增上寺/芝公園可地鐵轉都營線或短程的士。", "東京鐵塔戶外拍照不硬排，能見度差就改室內觀景/咖啡。"],
        food: ["築地場外市場是海鮮與傳統食材集中地，雨弱後再去會舒服一點。", "若早上雨大，先在銀座/東京站吃咖啡、甜品或商場餐廳。", "下午芝公園附近找咖啡店休腳。"],
        ready: ["早上先看雨量雷達，決定銀座/東京站先行或直接築地。", "帶現金，小店未必完全支援卡。", "雨傘/防水鞋，東京鐵塔拍照看能見度。"]
      },
      5: {
        budget: { total: "約 ¥18,000-35,000 / 人", lines: ["成人一日護照門票官方顯示由 ¥7,900 起，日期變動價。", "市區往返 + 迪士尼度假區線約 ¥1,200-2,000。", "DPA / 餐飲 / 週邊可快速增加，建議先定上限。"] },
        transportSteps: ["早到首選：日比谷線八丁堀 → JR 京葉線舞濱 → 迪士尼度假區線。", "06:25-06:40 出門，目標 07:45 到閘口。", "回程看體力，閉園人潮大時不要急衝。"],
        food: ["早餐：酒店附近便利店飯糰/咖啡，入園前先吃。", "午晚餐：用官方應用程式看手機點餐 / 餐廳等候。", "下午補水和小食，比硬排餐廳更重要。"],
        ready: ["官方應用程式登入、門票加入應用程式、信用卡綁定。", "DPA / 優先通行服務目標排序。", "雨衣、行動電源、輕便鞋。"]
      },
      6: {
        budget: { total: "約 ¥5,000-11,000 / 人 + 購物", lines: ["東武/JR/地鐵交通約 ¥1,200-2,000。", "春日部小新周邊與 Solamachi 購物另計。", "晚餐晴空塔商場約 ¥1,500-3,500 / 人。"] },
        transportSteps: ["秋葉原/仲御徒町 → 北千住 → 東武線至春日部。", "若春日部遇驟雨，刪減戶外慢行，提早由春日部 → 押上，直接進 Solamachi。", "晚上押上/淺草線或 JR 組合回秋葉原。"],
        food: ["春日部午餐：車站附近簡單定食/拉麵，不為一間店排太久。", "Solamachi 晚餐：商場餐廳選擇多，是第6日雨天主防線。", "想甜品可留在 Solamachi 吃。"],
        ready: ["小新目標點先存 Google 地圖。", "Solamachi 作雨天避難點，不要把春日部戶外走滿。", "查東武線回押上班次。"]
      },
      7: {
        budget: { total: "約 ¥6,000-15,000 / 人 + 精品購物", lines: ["市區交通約 ¥400-900。", "午晚餐約 ¥3,000-7,000；百貨甜品另計。", "東京站角色街/手信購物另計。"] },
        transportSteps: ["秋葉原 → 銀座：日比谷線直達方便。", "銀座、有樂町、東京站可步行/JR 一站串連。", "強雨時優先地下街和百貨連通路線。"],
        food: ["銀座/有樂町：百貨餐廳、喫茶店、甜品。", "東京站：拉麵街、Character Street 附近晚餐。", "雨天不要排戶外店，選商場內。"],
        ready: ["退稅護照放隨身袋。", "東京站一番街店鋪位置先存。", "買重物後評估是否先回酒店。"]
      },
      8: {
        budget: { total: "約 ¥5,000-14,000 / 人 + 新宿購物", lines: ["JR/地鐵約 ¥500-1,000。", "午餐/咖啡/晚餐約 ¥3,500-7,000。", "新宿百貨、服飾、藥妝另計。"] },
        transportSteps: ["秋葉原 → 原宿：JR 山手線最直覺。", "明治神宮、竹下通、Cat Street、表參道以步行串起。", "表參道/原宿 → 新宿，JR 或副都心線；晚上 JR 回秋葉原。"],
        food: ["原宿：可麗餅、小食、咖啡，但週末人多。", "表參道：咖啡/甜品休息點較舒服。", "新宿：百貨餐廳或地下食品樓，晚餐選擇穩。"],
        ready: ["週末早點出門，避開竹下通最高峰。", "穿好走的鞋。", "新宿購物清單先分百貨/藥妝/服飾。"]
      },
      9: {
        budget: { total: "約 ¥6,000-12,000 / 人", lines: ["的士轉酒店約 ¥2,000-4,000 / 車，視交通與行李。", "日本橋/東京站輕食晚餐約 ¥2,500-5,000。", "今日避免高額預約，留作轉場緩衝。"] },
        transportSteps: ["舊酒店退房後直接的士移防，減少拖行李轉車。", "新酒店寄存行李後只走日本橋/東京站周邊。", "熟習人形町、馬喰橫山、小傳馬町入口。"],
        food: ["人形町：親子丼、天婦羅、咖啡老店方向。", "日本橋：Coredo / 百貨餐廳穩定。", "東京站：便當、甜品、拉麵都可作輕鬆選項。"],
        ready: ["兩間酒店地址與入住時間截圖。", "行李重新分配，把後半段要用的放易取。", "洗衣/補給日用品。"]
      },
      10: {
        budget: { total: "約 ¥9,000-18,000 / 人", lines: ["teamLab Borderless 門票以官方日期價格為準，需預約早場。", "地鐵約 ¥400-800；麻布台 Hills 餐飲約 ¥2,500-6,000。", "拍照/咖啡/甜品另計。"] },
        transportSteps: ["日本橋/人形町 → 神谷町方向，步行接麻布台 Hills。", "teamLab 早場入場，預留 3-4 小時以上。", "晚餐不要排太遠，翌日還要留精神去 Shibuya Sky 15:40。"],
        food: ["麻布台 Hills：午餐、咖啡、甜品集中，適合慢慢拍照休息。", "六本木/神谷町周邊可作候補。", "晚餐回日本橋會更穩。"],
        ready: ["teamLab QR、入場時間、充電。", "穿淺色/好拍但好走的鞋。", "相機/手機容量清空。"]
      },
      11: {
        budget: { total: "約 ¥8,000-18,000 / 人 + 購物", lines: ["Shibuya Sky 已購買 7月7日 15:40 入場票，票券費用按已付款為準。", "日本橋往返澀谷交通約 ¥500-1,000。", "澀谷午餐/晚餐/甜品約 ¥4,000-8,000；購物另計。"] },
        transportSteps: ["日本橋/人形町 → 澀谷：可用半藏門線/銀座線/JR 轉乘，按 Google 地圖即時選最少轉乘。", "15:40 入場，建議 14:45-15:00 到澀谷 Scramble Square，避免找入口慌張。", "回程用銀座線/半藏門線轉回日本橋，不要太夜才離開。"],
        food: ["澀谷 PARCO / Scramble Square 餐廳，適合接展望台。", "宮下公園或澀谷咖啡店作下午休息點。", "若天氣差，直接把重點放在商場晚餐與甜品。"],
        ready: ["Shibuya Sky 7月7日15:40 QR / 票券截圖。", "14:45 前到場找入口。", "確認能見度、風速與官方營運。", "行動電源、外套；露天區有風。"]
      },
      12: {
        budget: { total: "約 ¥12,000-25,000 / 人", lines: ["一日遊 / 巴士團價格依平台與路線而定；集合交通另計。", "早餐/午餐/晚餐約 ¥3,000-6,000。", "天氣差時不要硬去，改第14日可保護體驗。"] },
        transportSteps: ["若新宿集合：都營新宿線到新宿，預留找集合點時間。", "若東京站集合：日本橋基地更方便，的士/步行可控。", "回程晚，直接回酒店，不再加購物。"],
        food: ["早餐便利店先買好，在集合前吃。", "午餐多數看團安排/河口湖周邊。", "回市區後簡單定食/便利店，重點是休息。"],
        ready: ["前一晚看能見度/雲量/雨量。", "集合點截圖、導遊聯絡、退款改期政策。", "薄外套、暈車藥、行動電源。"]
      },
      13: {
        budget: { total: "約 ¥7,000-15,000 / 人", lines: ["JR 往返鎌倉 + 江之電約 ¥2,000-3,500。", "寺院/大佛等小額門票另計。", "午晚餐約 ¥3,500-7,000，沿海咖啡另計。"] },
        transportSteps: ["新日本橋 → JR 總武快速/橫須賀線直達鎌倉最順。", "鎌倉站 → 長谷大佛 → 江之電沿海段 → 江之島視天氣。", "強風雨時直接與第14日互換。"],
        food: ["小町通：小食、甜品、抹茶。", "長谷/江之島：海鮮、咖啡、海景餐廳。", "回東京後若累，東京站買便當。"],
        ready: ["查沿海風雨與江之電狀態。", "穿防滑好走鞋。", "海邊防曬/帽/小毛巾。"]
      },
      14: {
        budget: { total: "約 ¥5,000-20,000+ / 人", lines: ["市區咖啡/購物約 ¥5,000-12,000；新宿購物另計。", "若補富士山/鎌倉，改用相應一日遊預算。", "今天保留最大彈性，避免硬預約。"] },
        transportSteps: ["日本橋 → 合羽橋/蔵前/清澄白河：地鐵 + 步行或短程的士。", "傍晚若轉新宿：馬喰橫山/岩本町一帶可搭都營新宿線直達新宿。", "若補富士山/鎌倉，直接套用第12/13日交通。"],
        food: ["蔵前/清澄白河：咖啡、烘焙、雜貨店休息。", "新宿：百貨餐廳、地下食品樓、咖啡甜品都穩。", "如果補戶外一日遊，回市區後吃簡單晚餐。"],
        ready: ["早上先決定是否補富士山/鎌倉。", "若留市區，準備購物清單與退稅護照。", "今天是保險位，不要排滿。"]
      },
      15: {
        budget: { total: "約 ¥5,000-16,000 / 人 + 手信", lines: ["交通低，主要步行/短程地鐵約 ¥300-800。", "餐飲約 ¥3,000-6,000。", "手信、甜品、藥妝、退稅按最後清單。"] },
        transportSteps: ["日本橋、人形町、東京站集中處理。", "買重物後先回酒店放低，再出第二輪。", "晚上留 90 分鐘以上執行李與秤重。"],
        food: ["東京站：便當、甜品、拉麵街、Character Street 附近。", "日本橋百貨：餐廳和食品樓適合手信收尾。", "人形町：最後一餐可選附近老店方向。"],
        ready: ["整理退稅單/收據。", "確認行李重量和液體限制。", "回程交通路線截圖。"]
      },
      16: {
        budget: { total: "約 ¥3,500-7,000 / 人 + 機場購物", lines: ["人形町至成田T2 Access 特急/都營淺草線直通約 ¥1,500-2,000 量級，實際以當日 IC 顯示為準。", "機場餐飲/手信約 ¥2,000-5,000。", "預留交通備用金，不要最後花光現金。"] },
        transportSteps: ["堀留 Villa 酒店 → 人形町站，搭都營淺草線直通京成方向。", "確認列車是往成田機場方向，不要上錯羽田方向。", "13:45-14:00 抵成田T2，留足退稅/安檢/購物。"],
        food: ["酒店附近簡單早餐或便利店。", "成田T2：過安檢前後都有餐飲，時間比市區更重要。", "上機前買水與小食。"],
        ready: ["護照、機票、行李、退稅品。", "Access 特急路線截圖。", "UO871 17:05 起飛，至少提前 3 小時到機場。"]
      }
    };

    const dayShortcuts = {
      1: { origin: "Narita Airport Terminal 2", destination: "Hotel Livemax Akihabara Kita", transportLabel: "成田T2 → 秋葉原酒店", foodQuery: "restaurants near Hotel Livemax Akihabara Kita Akihabara", foodLabel: "酒店附近晚餐" },
      2: { origin: "Hotel Livemax Akihabara Kita", destination: "Ameyoko Shopping District Ueno", transportLabel: "酒店 → 上野/阿美橫町", foodQuery: "restaurants Ameyoko Ueno Tokyo", foodLabel: "阿美橫町美食" },
      3: { origin: "Hotel Livemax Akihabara Kita", destination: "Shibuya PARCO Tokyo", waypoints: ["Sunshine City Ikebukuro Tokyo"], transportLabel: "秋葉原 → 池袋 → 澀谷購物", foodQuery: "restaurants near Shibuya PARCO Tokyo", foodLabel: "澀谷晚餐" },
      4: { origin: "Hotel Livemax Akihabara Kita", destination: "Tokyo Tower", waypoints: ["Tsukiji Outer Market"], transportLabel: "秋葉原 → 築地 → 東京鐵塔", foodQuery: "restaurants Tsukiji Outer Market Tokyo", foodLabel: "築地早午餐" },
      5: { origin: "Hotel Livemax Akihabara Kita", destination: "Tokyo DisneySea", transportLabel: "酒店 → 東京迪士尼海洋", foodQuery: "restaurants Tokyo DisneySea", foodLabel: "迪士尼海洋餐廳" },
      6: { origin: "Hotel Livemax Akihabara Kita", destination: "Tokyo Skytree Town Solamachi", waypoints: ["Kasukabe Station"], transportLabel: "秋葉原 → 春日部 → 晴空塔", foodQuery: "restaurants Tokyo Solamachi Skytree", foodLabel: "Solamachi 晚餐" },
      7: { origin: "Hotel Livemax Akihabara Kita", destination: "Tokyo Character Street", waypoints: ["GINZA SIX Tokyo"], transportLabel: "秋葉原 → 銀座 → 東京站", foodQuery: "restaurants Tokyo Ramen Street Tokyo Station", foodLabel: "東京站晚餐" },
      8: { origin: "Hotel Livemax Akihabara Kita", destination: "Isetan Shinjuku Tokyo", waypoints: ["Meiji Jingu Tokyo", "Omotesando Hills"], transportLabel: "秋葉原 → 原宿表參道 → 新宿", foodQuery: "restaurants Shinjuku Isetan Lumine Tokyo", foodLabel: "新宿晚餐" },
      9: { origin: "Hotel Livemax Akihabara Kita", destination: "Hotel Horidome Villa Tokyo", transportLabel: "秋葉原酒店 → 日本橋酒店", foodQuery: "restaurants Ningyocho Nihonbashi Tokyo", foodLabel: "人形町/日本橋午餐" },
      10: { origin: "Hotel Horidome Villa Tokyo", destination: "teamLab Borderless Azabudai Hills", transportLabel: "日本橋酒店 → teamLab", foodQuery: "restaurants Azabudai Hills Tokyo", foodLabel: "麻布台 Hills 餐廳" },
      11: { origin: "Hotel Horidome Villa Tokyo", destination: "Shibuya Sky Tokyo", waypoints: ["Shibuya PARCO Tokyo"], transportLabel: "日本橋酒店 → 澀谷 → Shibuya Sky", foodQuery: "restaurants near Shibuya Scramble Square", foodLabel: "澀谷展望台晚餐" },
      12: { origin: "Hotel Horidome Villa Tokyo", destination: "Shinjuku Station", transportLabel: "酒店 → 富士山團集合點", foodQuery: "restaurants near Shinjuku Station breakfast", foodLabel: "集合前早餐" },
      13: { origin: "Hotel Horidome Villa Tokyo", destination: "Enoshima Station", waypoints: ["Kamakura Station", "Kotoku-in Kamakura"], transportLabel: "日本橋 → 鎌倉 → 江之島", foodQuery: "restaurants Komachi dori Kamakura", foodLabel: "鎌倉小町通美食" },
      14: { origin: "Hotel Horidome Villa Tokyo", destination: "Kiyosumi-Shirakawa Station", waypoints: ["Kappabashi Dougu Street", "Kuramae Station"], transportLabel: "日本橋 → 合羽橋 → 蔵前 → 清澄白河", foodQuery: "cafes Kiyosumi Shirakawa Tokyo", foodLabel: "清澄白河咖啡" },
      15: { origin: "Hotel Horidome Villa Tokyo", destination: "Tokyo Character Street", waypoints: ["Coredo Muromachi"], transportLabel: "酒店 → 日本橋 → 東京站", foodQuery: "restaurants Tokyo Station Daimaru Tokyo", foodLabel: "東京站收尾餐" },
      16: { origin: "Hotel Horidome Villa Tokyo", destination: "Narita Airport Terminal 2", transportLabel: "日本橋酒店 → 成田T2", foodQuery: "restaurants Narita Airport Terminal 2", foodLabel: "成田T2 餐飲" }
    };

    const hotelStays = {
      akiba: {
        name: "秋葉原北 Livemax 酒店",
        base: "秋葉原",
        period: "6月27日 - 7月5日",
        query: "Hotel Livemax Akihabara Kita",
        routeLabel: "由目前位置回秋葉原酒店"
      },
      nihonbashi: {
        name: "堀留 Villa 酒店",
        base: "日本橋",
        period: "7月5日 - 7月12日",
        query: "Hotel Horidome Villa Tokyo",
        routeLabel: "由目前位置回日本橋酒店"
      }
    };

    const todayModeMeta = {
      1: { leave: "14:45 到埗後", target: "18:00 辦理入住", statuses: ["需檢查", "抵達"], checks: ["護照與入境 QR", "eSIM / Suica 可用", "Skyliner / 交通付款準備好", "酒店地址已截圖"] },
      2: { leave: "10:00", target: "上野午餐", statuses: ["彈性", "雨天可行"], checks: ["帶購物袋", "酒店附近車站先收藏", "退稅護照帶身上", "雨具按天氣決定"] },
      3: { leave: "10:00", target: "澀谷晚餐", statuses: ["角色店", "購物"], checks: ["Chiikawa / 候補方案確認", "池袋路線", "澀谷晚餐候補", "不要趕展望台"] },
      4: { leave: "09:45", target: "室內開局", statuses: ["留意天氣", "彈性"], checks: ["早上先看雨量雷達", "銀座/東京站室內候補已收藏", "雨弱後再去築地/東京鐵塔", "雨傘/防水鞋"] },
      5: { leave: "06:25-06:40", target: "07:45 迪士尼海洋", statuses: ["固定", "已預約", "帶雨具"], checks: ["東京迪士尼海洋門票已加入官方應用程式", "信用卡已綁定", "雨衣/防水袋/替換襪", "行動電源 + eSIM 可用"] },
      6: { leave: "09:30", target: "17:00 Solamachi", statuses: ["動漫", "避雨基地"], checks: ["春日部/押上路線收藏", "小新核心點優先", "驟雨即提早轉 Solamachi", "買重物後早回酒店"] },
      7: { leave: "10:30", target: "東京站晚餐", statuses: ["雨天可行", "購物"], checks: ["退稅護照", "購物清單", "東京站一番街收藏", "行李空間確認"] },
      8: { leave: "09:30", target: "17:30 新宿", statuses: ["週末", "購物"], checks: ["好走鞋", "明治神宮先去", "新宿百貨收藏", "轉酒店前整理行李"] },
      9: { leave: "10:00", target: "17:00 辦理入住", statuses: ["轉酒店", "低壓"], checks: ["舊酒店退房", "的士/行李路線", "新酒店地址截圖", "不要排預約景點"] },
      10: { leave: "09:00-09:30", target: "10:00 teamLab", statuses: ["已預約", "拍照日"], checks: ["teamLab QR", "相機/手機容量", "好走鞋", "晚上早回酒店"] },
      11: { leave: "11:30", target: "15:40 Shibuya Sky", statuses: ["已購票", "固定"], checks: ["15:40 票券 QR", "14:45 前到入口", "澀谷晚餐候補", "行動電源"] },
      12: { leave: "06:15-06:25", target: "07:15 集合", statuses: ["看天氣", "自然景"], checks: ["前一晚查能見度", "集合點截圖", "暈車藥/外套", "雨天啟動天氣模擬"] },
      13: { leave: "08:30-09:00", target: "鎌倉午前到", statuses: ["看天氣", "海邊"], checks: ["查沿海風雨", "江之電狀態", "防滑鞋", "強風改第14日"] },
      14: { leave: "10:30", target: "緩衝日", statuses: ["緩衝", "雨天可行"], checks: ["先決定是否補戶外日", "咖啡店收藏", "購物清單", "買重物先回酒店"] },
      15: { leave: "10:30", target: "15:30 整理行李", statuses: ["執行李", "低風險"], checks: ["手信清單", "行李重量", "退稅收據", "回程路線截圖"] },
      16: { leave: "12:15-12:30", target: "13:45 成田T2", statuses: ["回程", "固定"], checks: ["護照機票", "Access 特急方向", "退稅品", "17:05 UO871"] }
    };

    const earlyWeatherPlan = {
      1: {
        date: "2026-06-27",
        risk: "下午驟雨風險",
        headline: "到埗日保持極輕量",
        advice: "機場 → 秋葉原酒店 → 附近晚餐即可。不要加戶外景點；如果落雨，先完成 eSIM / Suica / Skyliner / 酒店入住。",
        action: "只開 Google 地圖回酒店與附近餐廳，不追景點。"
      },
      2: {
        date: "2026-06-28",
        risk: "早上驟雨",
        headline: "早上先室內，雨弱再上野/阿美橫町",
        advice: "秋葉原、上野、御徒町仍然成立，但早段優先 Yodobashi、atre、商場、咖啡店；雨弱後才做阿美橫町街區。",
        action: "帶傘和購物袋，買重物先回酒店放低。"
      },
      3: {
        date: "2026-06-29",
        risk: "多雲，雨勢較低",
        headline: "池袋 + 澀谷購物可保留",
        advice: "這天適合池袋、澀谷與角色店購物。今日不用趕展望台；差天氣就把重點放回 PARCO / Sunshine City。",
        action: "保留體力，澀谷晚餐後回秋葉原。"
      },
      4: {
        date: "2026-06-30",
        risk: "早上有雨",
        headline: "早上室內，築地/東京鐵塔順延",
        advice: "早上有雨時先去銀座/東京站室內、地下街或咖啡；雨弱後再去築地、增上寺、芝公園東京鐵塔。",
        action: "東京鐵塔是戶外/能見度項，下午再判斷。"
      },
      5: {
        date: "2026-07-01",
        risk: "多雲 / 微雨風險",
        headline: "迪士尼海洋固定，但用雨具運營",
        advice: "這是門票型固定日，不因小雨對調。準備雨衣、防水袋、替換襪；用官方應用程式 / DPA / 手機點餐減少濕身排隊。",
        action: "遇雨優先室內表演、餐廳、商店與短排項目。"
      },
      6: {
        date: "2026-07-02",
        risk: "驟雨風險",
        headline: "春日部輕量化，Solamachi 做避雨基地",
        advice: "春日部只保留小新核心點。若驟雨變強，提早坐東武線到押上，把晴空塔 Solamachi 作室內購物與晚餐基地。",
        action: "不要把春日部戶外步行排滿。"
      },
      7: {
        date: "2026-07-03",
        risk: "間歇有雨",
        headline: "銀座 / 有樂町 / 東京站是正確雨天日",
        advice: "這天原本就是最強雨天購物線：百貨、地下街、東京站一番街、拉麵街連接度高，保持原案。",
        action: "雨大時全天用地下街和百貨連接。"
      }
    };

    const dayWeatherTags = {
      1: ["抵達", "雨天安全"],
      2: ["雨天安全", "室內先行"],
      3: ["購物", "角色店"],
      4: ["留意天氣", "戶外順延"],
      5: ["固定", "需備雨具"],
      6: ["避雨基地", "輕量戶外"],
      7: ["雨天安全", "雨天購物"],
      8: ["戶外", "購物"],
      9: ["固定", "轉酒店"],
      10: ["固定", "室內"],
      11: ["已購票", "需看能見度"],
      12: ["需看能見度", "可對調"],
      13: ["戶外", "沿海風險"],
      14: ["雨天安全", "終極緩衝"],
      15: ["雨天安全", "執行李"],
      16: ["固定", "回程"]
    };

    const plans = {
      A: {
        title: "方案 A｜預設好天氣行程",
        items: [
          "7月7日第11日：澀谷購物 + Shibuya Sky 15:40 已購票入場。",
          "7月8日第12日：富士山 / 河口湖一日遊。",
          "7月9日第13日：鎌倉 / 江之島一日遊。",
          "7月10日第14日：合羽橋 + 蔵前 + 清澄白河 + 新宿購物緩衝。"
        ],
        updates: {
          11: ["澀谷購物 ＋ Shibuya Sky 15:40 已購票入場", "7月7日15:40固定入場；14:45前到 Shibuya Scramble Square 找入口。"],
          12: ["富士山 / 河口湖絕景全景一日遊", "富士山第一好天候補日。視能見度隨時與第14日互換。"],
          13: ["鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", "次要好天優先日。沿海暴雨強風時隨時與第14日互換。"],
          14: ["合羽橋 ＋ 蔵前 ＋ 清澄白河 ＋ 新宿購物緩衝", "若富士山與鎌倉已完成，今日做市區咖啡與新宿購物；否則用來補戶外日。"]
        }
      },
      B: {
        title: "方案 B｜7月8日富士山大雨，與第14日對調",
        items: [
          "7月7日第11日：Shibuya Sky 15:40 維持，提早到場。",
          "7月8日第12日：改做合羽橋 + 蔵前 + 清澄白河 / 新宿購物。",
          "7月9日第13日：鎌倉維持。",
          "7月10日第14日：若轉晴，補做富士山 / 河口湖。"
        ],
        updates: {
          11: ["澀谷購物 ＋ Shibuya Sky 15:40 已購票入場", "Shibuya Sky 維持7月7日15:40；若露天區受風雨影響，保留室內展望、購物與餐廳。"],
          12: ["合羽橋 ＋ 蔵前 ＋ 清澄白河 ＋ 新宿購物緩衝", "因富士山天雨，今日改為市區低風險行程。"],
          13: ["鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", "維持次優先好天日。"],
          14: ["富士山 / 河口湖絕景全景一日遊", "若能見度回升，今日補做富士山。"]
        }
      },
      C: {
        title: "方案 C｜7月9日鎌倉強風雨，與第14日互換",
        items: [
          "7月7日第11日：Shibuya Sky 15:40 照原定完成。",
          "7月8日第12日：富士山照原定完成。",
          "7月9日第13日：改為大型購物補遺。",
          "7月10日第14日：天氣回穩後補鎌倉/江之島。"
        ],
        updates: {
          11: ["澀谷購物 ＋ Shibuya Sky 15:40 已購票入場", "已順利完成。"],
          12: ["富士山 / 河口湖絕景全景一日遊", "已順利完成。"],
          13: ["全東京最大購物補遺（新宿/澀谷/東京站）", "因沿海強風雨，今日與第14日互換，先做室內購物。"],
          14: ["鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", "利用緩衝日補上鎌倉。"]
        }
      },
      D: {
        title: "方案 D｜富士山與鎌倉兩日皆遇雨",
        items: [
          "7月7日第11日：Shibuya Sky 15:40 維持，露天區視風雨決定。",
          "7月8日第12日：退守市區咖啡 / 新宿購物。",
          "7月9日第13日：若沿海仍差，改室內購物補遺。",
          "7月10日第14日：搶較好天補富士山或鎌倉，二選一保體驗。"
        ],
        updates: {
          11: ["澀谷購物 ＋ Shibuya Sky 15:40 已購票入場", "Shibuya Sky 維持7月7日15:40；若露天區關閉或能見度差，保留室內澀谷約會。"],
          12: ["合羽橋 ＋ 蔵前 ＋ 清澄白河 ＋ 新宿購物緩衝", "全面退守市區低風險行程。"],
          13: ["全東京最大購物補遺（新宿/澀谷/東京站）", "避開沿海惡劣天氣，保留鎌倉給明日；台場不作雨天優先。"],
          14: ["富士山 / 河口湖 或 鎌倉 / 江之島二選一", "按當天能見度與沿海風雨，選體驗較好的戶外日；另一個放棄或改市區。"]
        }
      }
    };

    const weatherStateLabels = {
      clear: "好天 / 能見度高",
      cloudy: "多雲但少雨",
      rain: "一般下雨",
      heavy: "大雨 / 雷雨",
      wind: "強風 / 沿海不穩"
    };

    const flexibleWeatherDays = [12, 13, 14];

    const weatherActivities = {
      fuji: {
        name: "富士山 / 河口湖絕景全景一日遊",
        short: "富士山",
        strategy: "好天及能見度優先；若雲厚或雨大，寧願換去市區日。",
        score: { clear: 10, cloudy: 5, rain: 1, heavy: -4, wind: 0 }
      },
      city: {
        name: "合羽橋 ＋ 蔵前 ＋ 清澄白河 ＋ 新宿購物緩衝",
        short: "市區咖啡/購物",
        strategy: "雨天可縮短步行並多用咖啡店、雜貨店和新宿百貨休息，適合承接壞天氣。",
        score: { clear: 6, cloudy: 8, rain: 8, heavy: 5, wind: 7 }
      },
      kamakura: {
        name: "鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）",
        short: "鎌倉",
        strategy: "海邊怕強風與暴雨；好天或多雲少雨才值得早出發。",
        score: { clear: 9, cloudy: 7, rain: 2, heavy: -4, wind: -5 }
      }
    };

    const defaultWeatherActivityByDay = {
      12: "fuji",
      13: "kamakura",
      14: "city"
    };

    let latestSmartWeatherPlan = null;

    const placeLabelMap = {
      "Hotel Livemax Akihabara Kita": "秋葉原北 Livemax 酒店",
      "Tokyo DisneySea": "東京迪士尼海洋",
      "Shibuya Sky Tokyo": "Shibuya Sky 澀谷展望台",
      "Isetan Shinjuku Tokyo": "新宿伊勢丹",
      "teamLab Borderless Azabudai Hills": "teamLab Borderless 麻布台 Hills",
      "Hotel Horidome Villa Tokyo": "堀留 Villa 酒店",
      "Tokyo Character Street": "東京站一番街角色街",
      "Narita Airport Terminal 2": "成田機場第2客運大樓",
      "Keisei Ueno Station": "京成上野站",
      "Akihabara Station Tokyo": "秋葉原站",
      "Naka-Okachimachi Station Tokyo": "仲御徒町站",
      "Ningyocho Station Tokyo": "人形町站",
      "Kodemmacho Station Tokyo": "小傳馬町站",
      "Tokyo Station": "東京站",
      "Lumine Shinjuku Tokyo": "新宿 Lumine",
      "NEWoMan Shinjuku Tokyo": "新宿 NEWoMan",
      "Shinjuku Takashimaya Tokyo": "新宿高島屋",
      "Sunshine City Ikebukuro Tokyo": "池袋 Sunshine City",
      "Shibuya PARCO Tokyo": "澀谷 PARCO",
      "Miyashita Park Shibuya": "澀谷 Miyashita Park",
      "Meiji Jingu Tokyo": "明治神宮",
      "Takeshita Street Harajuku": "原宿竹下通",
      "Cat Street Harajuku": "原宿貓街",
      "Omotesando Hills": "表參道 Hills",
      "GINZA SIX Tokyo": "GINZA SIX 銀座",
      "Ginza Mitsukoshi": "銀座三越",
      "MUJI Ginza": "無印良品銀座",
      "Yurakucho Station Tokyo": "有樂町站",
      "Coredo Muromachi Tokyo": "Coredo 室町",
      "Nihombashi Mitsukoshi Main Store": "日本橋三越本店",
      "Daimaru Tokyo": "大丸東京",
      "Odaiba Marine Park Tokyo": "台場海濱公園",
      "DiverCity Tokyo Plaza": "台場 DiverCity",
      "Unicorn Gundam Statue Odaiba": "台場獨角獸高達",
      "Rainbow Bridge Tokyo": "彩虹大橋"
    };

    const mapRoutes = {
      "all-tokyo": {
        label: "全部重點",
        day: "全旅程",
        icon: "travel_explore",
        title: "旅程地圖｜酒店、景點、購物、回程重點",
        desc: "把整趟最常用點位集中在一張地圖：兩間酒店、主要購物區、重點景點與成田回程。",
        origin: "Hotel Livemax Akihabara Kita",
        destination: "Narita Airport Terminal 2",
        stops: ["Hotel Livemax Akihabara Kita", "Tokyo DisneySea", "Shibuya Sky Tokyo", "Isetan Shinjuku Tokyo", "teamLab Borderless Azabudai Hills", "Hotel Horidome Villa Tokyo", "Tokyo Character Street", "Narita Airport Terminal 2"],
        query: "Hotel Livemax Akihabara Kita Tokyo DisneySea Shibuya Sky Isetan Shinjuku teamLab Borderless Hotel Horidome Villa Tokyo Character Street Narita Airport Terminal 2",
        embedQuery: "Tokyo Station",
        zoom: 11,
        note: "這個總覽適合出發前收藏重點。實際移動時用下面各區路線，會比一次導航全部點更準。"
      },
      "akiba-hotel": {
        label: "秋葉原酒店",
        day: "第1-8日",
        icon: "hotel",
        title: "酒店｜秋葉原北 Livemax",
        desc: "前半段基地。秋葉原、上野、池袋澀谷、迪士尼海洋、春日部晴空塔都由這裡出發。",
        origin: "Narita Airport Terminal 2",
        destination: "Hotel Livemax Akihabara Kita",
        stops: ["Narita Airport Terminal 2", "Keisei Ueno Station", "Hotel Livemax Akihabara Kita", "Akihabara Station Tokyo", "Naka-Okachimachi Station Tokyo"],
        query: "Hotel Livemax Akihabara Kita Akihabara Station Naka-Okachimachi Station Keisei Ueno Station",
        note: "到埗日行李多，Skyliner 到京成上野後可短程的士去酒店；平日出門記住先確認最近車站入口。"
      },
      "nihonbashi-hotel": {
        label: "日本橋酒店",
        day: "第9-16日",
        icon: "apartment",
        title: "酒店｜堀留 Villa",
        desc: "後半段基地。teamLab、富士山/鎌倉集合、東京站手信與成田回程都靠這裡控風險。",
        origin: "Hotel Livemax Akihabara Kita",
        destination: "Hotel Horidome Villa Tokyo",
        stops: ["Hotel Livemax Akihabara Kita", "Hotel Horidome Villa Tokyo", "Ningyocho Station Tokyo", "Kodemmacho Station Tokyo", "Tokyo Station"],
        query: "Hotel Horidome Villa Tokyo Ningyocho Station Kodemmacho Station Tokyo Station",
        note: "回程日重點是人形町/都營淺草線直通成田方向；最後兩天不要把重物帶太遠。"
      },
      shinjuku: {
        label: "新宿",
        day: "第14日",
        icon: "shopping_bag",
        title: "第14日候補｜新宿購物緩衝",
        desc: "若不用補富士山或鎌倉，傍晚可轉新宿百貨、藥妝、服飾與伴手禮集中處理。",
        origin: "Hotel Horidome Villa Tokyo",
        destination: "Isetan Shinjuku Tokyo",
        stops: ["Isetan Shinjuku Tokyo", "Lumine Shinjuku Tokyo", "NEWoMan Shinjuku Tokyo", "Shinjuku Takashimaya Tokyo"],
        query: "Isetan Shinjuku Tokyo Lumine Shinjuku NEWoMan Shinjuku",
        note: "建議把 Isetan、Lumine、NEWoMan 先存到 Google 地圖清單，到現場按營業時間和退稅排隊狀況微調。"
      },
      shibuya: {
        label: "澀谷",
        day: "第11日",
        icon: "favorite",
        title: "第11日｜澀谷 → Shibuya Sky 15:40",
        desc: "Shibuya Sky 已買7月7日15:40入場票，白天慢逛澀谷，14:45前到入口。",
        origin: "Hotel Horidome Villa Tokyo",
        destination: "Shibuya Sky Tokyo",
        stops: ["Hotel Horidome Villa Tokyo", "Shibuya PARCO Tokyo", "Miyashita Park Shibuya", "Shibuya Sky Tokyo"],
        query: "Hotel Horidome Villa Shibuya PARCO Miyashita Park Shibuya Sky",
        note: "Shibuya Sky 已購買7月7日15:40票；如果下雨或強風，澀谷購物仍可保留，展望台按官方營運調整。"
      },
      harajuku: {
        label: "原宿表參道",
        day: "第8日",
        icon: "styler",
        title: "第8日｜明治神宮 → 原宿 → 表參道 → 新宿",
        desc: "早上走神宮大空間，下午潮流街區，傍晚接新宿夜購，適合拍照和散步。",
        origin: "Meiji Jingu Tokyo",
        destination: "Isetan Shinjuku Tokyo",
        stops: ["Meiji Jingu Tokyo", "Takeshita Street Harajuku", "Cat Street Harajuku", "Omotesando Hills", "Isetan Shinjuku Tokyo"],
        query: "Meiji Jingu Takeshita Street Cat Street Omotesando Hills Isetan Shinjuku",
        note: "週末原宿人多，先去明治神宮，再視體力決定貓街或直接表參道咖啡。"
      },
      ginza: {
        label: "銀座東京站",
        day: "第7日",
        icon: "diamond",
        title: "第7日｜銀座 → 有樂町 → 東京站一番街",
        desc: "雨天購物強線。百貨、地下街、角色街和拉麵街容易連接，不怕天氣差。",
        origin: "Ginza Six Tokyo",
        destination: "Tokyo Character Street",
        stops: ["GINZA SIX Tokyo", "Ginza Mitsukoshi", "MUJI Ginza", "Yurakucho Station Tokyo", "Tokyo Character Street"],
        query: "GINZA SIX Ginza Mitsukoshi MUJI Ginza Tokyo Character Street",
        note: "大雨時優先走地下街和百貨連接，東京站一番街可留到傍晚避開戶外。"
      },
      nihonbashi: {
        label: "日本橋手信",
        day: "第15日",
        icon: "redeem",
        title: "第15日｜日本橋 → 東京站手信收尾",
        desc: "最後一天低風險收尾：買手信、退稅、回酒店執行李，不再跨太遠。",
        origin: "Hotel Horidome Villa Tokyo",
        destination: "Daimaru Tokyo",
        stops: ["Hotel Horidome Villa Tokyo", "Coredo Muromachi Tokyo", "Nihombashi Mitsukoshi Main Store", "Tokyo Character Street", "Daimaru Tokyo"],
        query: "Hotel Horidome Villa Coredo Muromachi Nihombashi Mitsukoshi Tokyo Character Street Daimaru Tokyo",
        note: "買完重物先回酒店放低，再補最後缺口；這天以行李重量和回程準備為優先。"
      },
      odaiba: {
        label: "台場候補",
        day: "第14日",
        icon: "water",
        title: "好天候補｜台場海景與 DiverCity",
        desc: "如果第14日天氣很好、購物已完成，可以改成海濱散步、高達與彩虹大橋夜景。",
        origin: "Hotel Horidome Villa Tokyo",
        destination: "DiverCity Tokyo Plaza",
        stops: ["Odaiba Marine Park Tokyo", "DiverCity Tokyo Plaza", "Unicorn Gundam Statue Odaiba", "Rainbow Bridge Tokyo"],
        query: "Odaiba Marine Park DiverCity Tokyo Plaza Unicorn Gundam Rainbow Bridge",
        note: "台場不適合強風雨硬去；若下雨，留在新宿或銀座百貨會舒服很多。"
      }
    };

    const WEATHER_PLAN_VERSION = "天氣建議根據 2026年6月23日已查預報整理；7月戶外日仍請在出發前 24-48 小時重查。";

    const OFFLINE_PACK_CACHE = "tokyo-trip-manual-offline-pack-v12-5-shibuya-sky-1540";
    const OFFLINE_PACK = [
      "./",
      "./index.html",
      "./tokyo_itinerary.html",
      "./tokyo_itineray.html",
      "./offline.html",
      "./manifest.webmanifest",
      "./service-worker.js",
      "./sw.js",
      "./assets/css/style.css",
      "./assets/js/app.js",
      "./assets/icons/icon-180.png",
      "./assets/icons/icon-192.png",
      "./assets/icons/icon-512.png",
      "./assets/icons/maskable-512.png",
      "./assets/offline/offline-data.json",
      "./assets/offline/hotel-akihabara.md",
      "./assets/offline/hotel-nihonbashi.md",
      "./assets/offline/airport-return.md",
      "./assets/offline/disneysea.md",
      "./assets/offline/emergency.md",
      "./assets/offline/map-notes.md",
      "./assets/offline/maps/akihabara-hotel-area.webp",
      "./assets/offline/maps/nihonbashi-hotel-area.webp",
      "./assets/offline/maps/narita-return-summary.webp",
      "./assets/offline/maps/disneysea-arrival-summary.webp"
    ];

    function basePill(base) {
      if (base === "秋葉原") return '<span class="lodging-pill lodging-akiba">秋葉原</span>';
      if (base === "日本橋") return '<span class="lodging-pill lodging-nihonbashi">日本橋</span>';
      return '<span style="color:#94a3b8">—</span>';
    }

    const weatherTagClassMap = {
      "抵達": "arrival",
      "雨天安全": "rain-safe",
      "室內先行": "indoor-first",
      "需看能見度": "visibility-needed",
      "留意天氣": "rain-aware",
      "戶外順延": "outdoor-later",
      "固定": "fixed",
      "需備雨具": "rain-gear-needed",
      "避雨基地": "rain-shelter",
      "輕量戶外": "outdoor-light",
      "雨天購物": "indoor-shopping",
      "戶外": "outdoor",
      "購物": "shopping",
      "轉酒店": "hotel-transfer",
      "室內": "indoor",
      "可對調": "swap-candidate",
      "沿海風險": "wind-sensitive",
      "緩衝": "buffer",
      "執行李": "packing",
      "回程": "return"
    };

    function weatherTagClass(label) {
      return weatherTagClassMap[label] || "";
    }

    function renderWeatherBadges(day) {
      return (dayWeatherTags[day] || []).map(label => `
        <span class="weather-badge ${weatherTagClass(label)}">${label}</span>
      `).join("");
    }

    function formatPlanCell(item, plan = item.plan) {
      const disneyBadge = item.day === 5 ? '<span class="badge badge-coral" style="margin-right:8px">迪士尼海洋</span>' : "";
      return `${disneyBadge}${plan}<div class="weather-tag-row table-weather-tags">${renderWeatherBadges(item.day)}</div>`;
    }

    function renderTable(data = itinerary) {
      const body = document.getElementById("master-table-body");
      body.innerHTML = data.map(item => `
        <tr class="${item.row || ""}" data-day="${item.day}" tabindex="0" role="button" aria-label="打開第${item.day}日詳細行程">
          <td class="day-cell" data-label="日期 / 日數">${item.date}<span>第 ${item.day} 日</span><em class="table-jump"><span class="material-symbols-outlined" style="font-size:14px">touch_app</span> 點擊看詳情</em></td>
          <td class="plan-cell" data-label="主行程">${formatPlanCell(item)}</td>
          <td data-label="住宿基地">${basePill(item.base)}</td>
          <td class="strategy-cell" data-label="天氣 / 人潮策略">${item.strategy}</td>
        </tr>
      `).join("");
      body.querySelectorAll("[data-day]").forEach(row => {
        row.addEventListener("click", () => openDayDetail(Number(row.dataset.day)));
        row.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openDayDetail(Number(row.dataset.day));
          }
        });
      });
    }

    function clampTripDay(day) {
      return Math.min(16, Math.max(1, day));
    }

    function getAutoTripDay() {
      const tripStart = new Date("2026-06-27T00:00:00+09:00");
      const now = new Date();
      return clampTripDay(Math.floor((now - tripStart) / 86400000) + 1);
    }

    function statusClass(label) {
      if (/固定|回程|高優先/.test(label)) return "status-fixed";
      if (/已預約|抵達|需預約/.test(label)) return "status-booked";
      if (/需檢查|看天氣|緩衝|雨天|留意/.test(label)) return "status-check";
      return "status-flex";
    }

    function getTodayWeatherAdvice(day) {
      if (earlyWeatherPlan[day]) return earlyWeatherPlan[day];
      if (day === 11) {
        return {
          risk: "展望台風雨檢查",
          headline: "Shibuya Sky 15:40 已購票",
          advice: "Shibuya Sky 已買7月7日15:40入場票。出發前先查風雨、能見度與官方營運；若露天區受影響，仍可保留室內展望、澀谷 PARCO、Scramble Square、宮下公園與晚餐。",
          action: "14:45 前到 Shibuya Scramble Square 找入口；不要為低能見度硬上露天區。"
        };
      }
      if (day === 12) {
        return {
          risk: "能見度檢查",
          headline: "富士山只看好天與能見度",
          advice: "富士山改為第12日第一候補。出發前 24-48 小時看雲量、雨量與能見度；若雲厚或雨大，直接啟動第12-14日天氣對調。",
          action: "到天氣分頁跑智能天氣模擬。"
        };
      }
      if (day === 13) {
        return {
          risk: "強風 / 沿海檢查",
          headline: "鎌倉江之島怕強風雨",
          advice: "沿海強風、暴雨或江之電受影響時，不硬去海邊，與第14日新宿購物互換。",
          action: "出發前查風雨與江之電狀態。"
        };
      }
      return {
        risk: "每日檢查",
        headline: "按即日天氣微調節奏",
        advice: "固定日不輕易換；戶外與展望台看雨量、風和能見度；室內購物日可作臨時緩衝。",
        action: "雨大時優先酒店附近、地下街、百貨和咖啡店。"
      };
    }

    function renderTodayWeatherAdvice(day) {
      const card = document.getElementById("today-weather-advice");
      if (!card) return;
      const advice = getTodayWeatherAdvice(day);
      card.innerHTML = `
        <div class="today-weather-head">
          <span class="material-symbols-outlined">rainy</span>
          <div>
            <strong>今日天氣建議</strong>
            <span>${advice.risk}</span>
          </div>
        </div>
        <h3>${advice.headline}</h3>
        <p>${advice.advice}</p>
        <p class="weather-version-note">${WEATHER_PLAN_VERSION}</p>
        <div class="weather-action-note">${advice.action}</div>
        <div class="weather-tag-row">${renderWeatherBadges(day)}</div>
      `;
    }

    function renderTodayDayGrid(activeDay) {
      const grid = document.getElementById("today-day-grid");
      if (!grid) return;
      grid.innerHTML = details.map(item => `
        <button class="today-day-btn ${item.day === activeDay ? "active" : ""}" type="button" data-today-day="${item.day}">第${item.day}日</button>
      `).join("");
      grid.querySelectorAll("[data-today-day]").forEach(button => {
        button.addEventListener("click", () => renderTodayMode(Number(button.dataset.todayDay)));
      });
    }

    function renderTodayMode(day = getAutoTripDay()) {
      const activeDay = clampTripDay(day);
      const detail = details.find(item => item.day === activeDay);
      const itineraryItem = itinerary.find(item => item.day === activeDay);
      const shortcut = dayShortcuts[activeDay];
      const meta = todayModeMeta[activeDay] || {};
      if (!detail || !shortcut) return;

      document.getElementById("today-mode-title").textContent = `今日：第${activeDay}日 - ${detail.title.replace(/^.*?｜\s*/, "")}`;
      document.getElementById("today-mode-subtitle").textContent = `${itineraryItem?.date || ""} ｜ ${detail.type} ｜ ${detail.pace}`;
      document.getElementById("today-leave-time").textContent = meta.leave || detail.timeline?.[0] || "--";
      document.getElementById("today-target-time").textContent = meta.target || shortcut.destination;
      document.getElementById("today-base").textContent = itineraryItem?.base || "--";
      document.getElementById("today-focus").textContent = detail.focus;
      renderTodayWeatherAdvice(activeDay);
      document.getElementById("today-status-row").innerHTML = (meta.statuses || [detail.type, detail.pace]).map(label => `
        <span class="status-label ${statusClass(label)}">${label}</span>
      `).join("");

      const routeLink = document.getElementById("today-route-link");
      const placeLink = document.getElementById("today-place-link");
      const foodLink = document.getElementById("today-food-link");
      routeLink.href = buildDayDirectionsUrl(shortcut);
      routeLink.innerHTML = `<span class="material-symbols-outlined">directions</span> ${shortcut.transportLabel}`;
      placeLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shortcut.destination)}`;
      foodLink.href = buildDayFoodUrl(shortcut);
      foodLink.innerHTML = `<span class="material-symbols-outlined">restaurant</span> ${shortcut.foodLabel}`;
      document.getElementById("today-detail-btn").onclick = () => openDayDetail(activeDay, { compact: true });

      document.getElementById("today-checklist").innerHTML = (meta.checks || dayGuides[activeDay]?.ready || []).map((item, index) => `
        <label class="today-check-row"><input type="checkbox" data-check="today-${activeDay}-${index}"><span>${item}</span></label>
      `).join("");
      renderTodayDayGrid(activeDay);
      hydrateSavedChecks(document.getElementById("today-checklist"));
      renderHotelPanel(activeDay);
    }

    function getHotelStayKey(day = getAutoTripDay()) {
      return clampTripDay(day) <= 8 ? "akiba" : "nihonbashi";
    }

    function renderHotelPanel(day = getAutoTripDay()) {
      const stay = hotelStays[getHotelStayKey(day)];
      if (!stay) return;
      const current = document.getElementById("hotel-panel-current");
      const base = document.getElementById("hotel-panel-base");
      const period = document.getElementById("hotel-panel-period");
      const mapLink = document.getElementById("hotel-panel-map");
      const routeLink = document.getElementById("hotel-panel-route");
      if (current) current.textContent = stay.name;
      if (base) base.textContent = stay.base;
      if (period) period.textContent = stay.period;
      if (mapLink) mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.query)}`;
      if (routeLink) {
        routeLink.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(stay.query)}&travelmode=transit`;
        routeLink.innerHTML = `<span class="material-symbols-outlined">directions</span> ${stay.routeLabel}`;
      }
    }

    function renderDetails() {
      const box = document.getElementById("daily-accordion");
      box.innerHTML = details.map(item => `
        <details class="day-card" id="day-${item.day}" ${item.open ? "open" : ""}>
          <summary>
            <div class="summary-left">
              <span class="day-badge">第${item.day}日</span>
              <span class="day-visual" style="--image:url('${item.image || ""}')"></span>
              <span class="summary-copy">
                <span class="summary-title">${item.title}</span>
                <span class="day-meta">
                  <span class="meta-pill mood-${item.mood || "city"}">${item.type || "行程"}</span>
                  <span class="meta-pill mood-buffer">${item.pace || "彈性"}</span>
                  ${renderWeatherBadges(item.day)}
                </span>
              </span>
            </div>
            <span class="material-symbols-outlined chevron">expand_more</span>
          </summary>
          <div class="day-detail day-guide-shell">
            ${renderDayGuide(item)}
          </div>
        </details>
      `).join("");
      box.querySelectorAll(".day-card").forEach(card => {
        card.addEventListener("toggle", () => {
          if (card.open) setActiveDayButton(Number(card.id.replace("day-", "")));
        });
      });
      box.querySelectorAll("[data-day-section]").forEach(button => {
        button.addEventListener("click", () => selectDaySection(button.closest(".day-card"), button.dataset.daySection));
      });
    }

    function renderDayIndex() {
      const grid = document.getElementById("day-index-grid");
      const badge = document.getElementById("day-count-badge");
      const days = details.map(item => item.day);
      const missing = Array.from({ length: 16 }, (_, index) => index + 1).filter(day => !days.includes(day));
      badge.textContent = missing.length ? `欠第 ${missing.join(", ")} 日` : "第1-16日全齊";
      grid.innerHTML = details.map(item => `<button class="day-index-btn" type="button" data-jump-day="${item.day}">第${item.day}日</button>`).join("");
      grid.querySelectorAll("[data-jump-day]").forEach(button => {
        button.addEventListener("click", () => openDayDetail(Number(button.dataset.jumpDay), { compact: true }));
      });
    }

    function formatTimelineItem(text) {
      const match = text.match(/^(\d{2}:\d{2}(?:-\d{2}:\d{2})?)\s+(.+)$/);
      if (!match) return `<div class="timeline-item">${text}</div>`;
      return `<div class="timeline-item"><strong>${match[1]}</strong>${match[2]}</div>`;
    }

    function renderList(items = []) {
      return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
    }

    function renderDayGuide(item) {
      const guide = dayGuides[item.day];
      if (!guide) return "";
      return `
        <div class="day-section-tabs" aria-label="第${item.day}日詳情分頁">
          <button class="day-section-tab active" type="button" data-day-section="focus"><span class="material-symbols-outlined">flag</span> 重點</button>
          <button class="day-section-tab" type="button" data-day-section="transport"><span class="material-symbols-outlined">train</span> 交通</button>
          <button class="day-section-tab" type="button" data-day-section="timeline"><span class="material-symbols-outlined">timeline</span> 時間</button>
          <button class="day-section-tab" type="button" data-day-section="budget"><span class="material-symbols-outlined">payments</span> 預算</button>
          <button class="day-section-tab" type="button" data-day-section="food"><span class="material-symbols-outlined">restaurant</span> 食物</button>
          <button class="day-section-tab" type="button" data-day-section="ready"><span class="material-symbols-outlined">task_alt</span> 確認</button>
        </div>
        <div class="day-section-panels">
          <div class="day-section-panel active" data-section-panel="focus">
            <div class="guide-card">
              <h4><span class="material-symbols-outlined">flag</span> 今日重點</h4>
              <p>${item.focus}</p>
            </div>
          </div>
          <div class="day-section-panel" data-section-panel="transport">
            <div class="daily-mini-card">
              <h4><span class="material-symbols-outlined">directions_transit</span> 交通細節</h4>
              ${renderShortcutActions(item.day, "transport")}
              <p style="margin:0 0 10px;color:var(--slate-600);font-size:12px;line-height:1.6;font-weight:650">${item.transport}</p>
              ${renderList(guide.transportSteps)}
            </div>
          </div>
          <div class="day-section-panel" data-section-panel="timeline">
            <div class="guide-card">
              <h4><span class="material-symbols-outlined">timeline</span> 時間線</h4>
              <div class="timeline">${item.timeline.map(formatTimelineItem).join("")}</div>
            </div>
          </div>
          <div class="day-section-panel" data-section-panel="budget">
            <div class="daily-mini-card">
            <h4><span class="material-symbols-outlined">payments</span> 預算與價格估算</h4>
            <div class="budget-line">
              <span class="budget-total">${guide.budget.total}</span>
              ${renderList(guide.budget.lines)}
              <span class="daily-note">價格會因日期、匯率、排隊/購物選擇改變；出發前以官方與 Google 地圖當日顯示為準。</span>
            </div>
            </div>
          </div>
          <div class="day-section-panel" data-section-panel="food">
            <div class="daily-mini-card">
              <h4><span class="material-symbols-outlined">restaurant</span> 食物推薦方向</h4>
              ${renderShortcutActions(item.day, "food")}
              ${renderList(guide.food)}
            </div>
          </div>
          <div class="day-section-panel" data-section-panel="ready">
            <div class="daily-mini-card">
              <h4><span class="material-symbols-outlined">task_alt</span> 出發前確認</h4>
              ${renderList(guide.ready)}
            </div>
          </div>
        </div>
      `;
    }

    function buildDayDirectionsUrl(shortcut) {
      const params = new URLSearchParams({
        api: "1",
        origin: shortcut.origin,
        destination: shortcut.destination,
        travelmode: "transit"
      });
      if (shortcut.waypoints?.length) params.set("waypoints", shortcut.waypoints.join("|"));
      return `https://www.google.com/maps/dir/?${params.toString()}`;
    }

    function buildDayFoodUrl(shortcut) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shortcut.foodQuery)}`;
    }

    function renderShortcutActions(day, type) {
      const shortcut = dayShortcuts[day];
      if (!shortcut) return "";
      if (type === "transport") {
        return `
          <div class="day-action-row">
            <a class="day-action-link" href="${buildDayDirectionsUrl(shortcut)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">directions</span> ${shortcut.transportLabel}</a>
            <a class="day-action-link secondary" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shortcut.destination)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">pin_drop</span> 目的地地圖</a>
          </div>
        `;
      }
      if (type === "food") {
        return `
          <div class="day-action-row">
            <a class="day-action-link" href="${buildDayFoodUrl(shortcut)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">restaurant</span> ${shortcut.foodLabel}</a>
            <a class="day-action-link secondary" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`cafes near ${shortcut.destination}`)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">local_cafe</span> 附近咖啡</a>
          </div>
        `;
      }
      return "";
    }

    function updateActiveDayCommand(day) {
      const command = document.getElementById("day-command-card");
      if (!command) return;
      const item = details.find(detail => detail.day === day);
      const shortcut = dayShortcuts[day];
      if (!item || !shortcut) {
        command.innerHTML = "";
        return;
      }
      command.innerHTML = `
        <div class="day-command-top">
          <div class="day-command-title">
            <strong>${item.title}</strong>
            <span>${item.type} ｜ ${item.pace} ｜ ${item.focus}</span>
          </div>
              <span class="day-command-badge">目前選擇第${item.day}日</span>
        </div>
        <div class="day-command-actions">
          <a class="day-command-link primary" href="${buildDayDirectionsUrl(shortcut)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">directions</span> 最快交通</a>
          <a class="day-command-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shortcut.destination)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">pin_drop</span> 目的地</a>
          <a class="day-command-link" href="${buildDayFoodUrl(shortcut)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">restaurant</span> 食物</a>
          <button class="day-command-action" type="button" data-command-day="${item.day}" data-command-section="budget"><span class="material-symbols-outlined">payments</span> 預算</button>
        </div>
        <div class="day-command-sections" aria-label="第${item.day}日內容快速跳轉">
          <button class="day-command-action primary" type="button" data-command-day="${item.day}" data-command-section="transport"><span class="material-symbols-outlined">train</span> 交通</button>
          <button class="day-command-action" type="button" data-command-day="${item.day}" data-command-section="timeline"><span class="material-symbols-outlined">timeline</span> 時間</button>
          <button class="day-command-action" type="button" data-command-day="${item.day}" data-command-section="food"><span class="material-symbols-outlined">restaurant</span> 食物頁</button>
          <button class="day-command-action" type="button" data-command-day="${item.day}" data-command-section="ready"><span class="material-symbols-outlined">task_alt</span> 確認</button>
        </div>
      `;
    }

    function selectDaySection(card, section) {
      if (!card) return;
      card.querySelectorAll("[data-day-section]").forEach(button => {
        button.classList.toggle("active", button.dataset.daySection === section);
      });
      card.querySelectorAll("[data-section-panel]").forEach(panel => {
        panel.classList.toggle("active", panel.dataset.sectionPanel === section);
      });
    }

    function setActiveDayButton(day) {
      document.querySelectorAll("[data-jump-day]").forEach(button => {
        button.classList.toggle("active", Number(button.dataset.jumpDay) === day);
      });
      updateActiveDayCommand(day);
    }

    function openDayDetail(day, options = {}) {
      const compact = options.compact !== false;
      const shouldScroll = options.scroll !== false;
      switchTab("daily-detail");
      requestAnimationFrame(() => {
        const card = document.getElementById(`day-${day}`);
        if (!card) return;
        if (compact) {
          document.querySelectorAll(".day-card").forEach(dayCard => {
            dayCard.open = dayCard === card;
          });
        }
        card.open = true;
        setActiveDayButton(day);
        if (options.section) selectDaySection(card, options.section);
        if (shouldScroll) card.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    function expandAllDays() {
      document.querySelectorAll(".day-card").forEach(card => { card.open = true; });
    }

    function collapseAllDays() {
      document.querySelectorAll(".day-card").forEach(card => { card.open = false; });
      document.querySelectorAll("[data-jump-day]").forEach(button => button.classList.remove("active"));
    }

    function initializeCompactDailyView(day = 1) {
      document.querySelectorAll(".day-card").forEach(card => {
        card.open = card.id === `day-${day}`;
      });
      setActiveDayButton(day);
    }

    function buildMapsSearchUrl(query) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    }

    function buildMapsDirectionsUrl(route) {
      const waypoints = route.stops.slice(1, -1).join("|");
      const params = new URLSearchParams({
        api: "1",
        origin: route.origin,
        destination: route.destination,
        travelmode: "transit"
      });
      if (waypoints) params.set("waypoints", waypoints);
      return `https://www.google.com/maps/dir/?${params.toString()}`;
    }

    function buildMapsEmbedUrl(route) {
      const query = route.embedQuery || route.destination || route.query;
      const zoom = route.zoom || 14;
      return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
    }

    function renderMapRoutes(activeKey = "all-tokyo") {
      const buttons = document.getElementById("map-route-buttons");
      if (!buttons) return;
      buttons.innerHTML = Object.entries(mapRoutes).map(([key, route]) => `
        <button class="map-route-btn" type="button" data-map-route="${key}">
          <span><span class="material-symbols-outlined">${route.icon}</span>${route.label}</span>
          <small>${route.day}</small>
        </button>
      `).join("");
      buttons.querySelectorAll("[data-map-route]").forEach(button => {
        button.addEventListener("click", () => selectMapRoute(button.dataset.mapRoute));
      });
      selectMapRoute(activeKey);
    }

    function selectMapRoute(routeKey) {
      const route = mapRoutes[routeKey] || mapRoutes.shinjuku;
      const frame = document.getElementById("google-map-frame");
      const title = document.getElementById("map-route-title");
      const desc = document.getElementById("map-route-desc");
      const stops = document.getElementById("map-stop-list");
      const note = document.getElementById("map-route-note");
      const openLink = document.getElementById("map-open-link");
      const directionsLink = document.getElementById("map-directions-link");

      if (frame) frame.src = buildMapsEmbedUrl(route);
      if (title) title.textContent = route.title;
      if (desc) desc.textContent = route.desc;
      if (note) note.textContent = route.note;
      if (openLink) openLink.href = buildMapsSearchUrl(route.query);
      if (directionsLink) directionsLink.href = buildMapsDirectionsUrl(route);
      if (stops) {
        stops.innerHTML = route.stops.map((stop, index) => `
          <div class="map-stop"><b>${index + 1}</b><span>${placeLabelMap[stop] || stop}</span></div>
        `).join("");
      }
      document.querySelectorAll(".map-route-btn[data-map-route]").forEach(button => {
        button.classList.toggle("active", button.dataset.mapRoute === routeKey);
      });
      setDockActive(dockKeyForTarget("shopping-map"));
    }

    function dockKeyForTarget(tabId) {
      const dockMap = {
        "today-mode": "today",
        "shopping-map": "map",
        "hotel-panel": "hotel",
        "weather-strategy": "weather",
        "return-help": "return"
      };
      return dockMap[tabId] || "";
    }

    function setDockActive(key) {
      document.querySelectorAll(".dock-btn").forEach(button => {
        const isActive = Boolean(key) && button.dataset.dockKey === key;
        button.classList.remove("active");
        button.classList.toggle("is-dock-active", isActive);
        if (isActive) {
          button.setAttribute("aria-current", "page");
        } else {
          button.removeAttribute("aria-current");
        }
      });
    }

    function handlePocketAction(button) {
      const tab = button.dataset.jumpTab;
      const day = button.dataset.jumpDay;
      const mapRoute = button.dataset.mapRoute;
      if (tab) switchTab(tab);
      const dockKey = dockKeyForTarget(tab);
      if (dockKey) setDockActive(dockKey);
      if (button.classList.contains("dock-btn")) button.blur();
      if (mapRoute) {
        requestAnimationFrame(() => {
          selectMapRoute(mapRoute);
          document.getElementById(tab)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      if (day) {
        requestAnimationFrame(() => openDayDetail(Number(day)));
      } else if (tab && !mapRoute) {
        requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
      }
    }

    function switchTab(tabId, updateHash = true) {
      if (!document.getElementById(tabId)) return;
      document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
      document.getElementById(tabId).classList.add("active");
      document.querySelectorAll(".nav-btn, .mobile-tab").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabId);
      });
      setDockActive(dockKeyForTarget(tabId));
      if (updateHash) history.replaceState(null, "", `#${tabId}`);
    }

    function applyPlanUpdates(updates) {
      const rows = document.querySelectorAll("[data-day]");
      rows.forEach(row => {
        const day = Number(row.dataset.day);
        if (!updates[day]) return;
        const item = itinerary.find(entry => entry.day === day) || { day };
        row.querySelector(".plan-cell").innerHTML = formatPlanCell(item, updates[day][0]);
        row.querySelector(".strategy-cell").textContent = updates[day][1];
      });
    }

    function simulateWeather(planKey) {
      const plan = plans[planKey];
      document.getElementById("current-plan-title").textContent = plan.title;
      document.getElementById("current-plan-desc").innerHTML = plan.items.map(item => `<li>${item}</li>`).join("");
      document.querySelectorAll(".weather-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.plan === planKey));
      applyPlanUpdates(plan.updates);
    }

    function getWeatherInputs() {
      return Object.fromEntries([...document.querySelectorAll("[data-weather-day]")].map(select => [
        Number(select.dataset.weatherDay),
        select.value
      ]));
    }

    function permutations(items) {
      if (items.length <= 1) return [items];
      return items.flatMap((item, index) => {
        const rest = [...items.slice(0, index), ...items.slice(index + 1)];
        return permutations(rest).map(result => [item, ...result]);
      });
    }

    function calculateSmartWeatherPlan() {
      const states = getWeatherInputs();
      const activityKeys = Object.keys(weatherActivities);
      let best = null;
      permutations(activityKeys).forEach(order => {
        let score = 0;
        const updates = {};
        const items = [];
        order.forEach((activityKey, index) => {
          const day = flexibleWeatherDays[index];
          const activity = weatherActivities[activityKey];
          const state = states[day] || "cloudy";
          score += activity.score[state] || 0;
          if (defaultWeatherActivityByDay[day] === activityKey) score += 0.4;
          updates[day] = [activity.name, `${weatherStateLabels[state]}：${activity.strategy}`];
          items.push(`第${day}日：${activity.short}｜${weatherStateLabels[state]}`);
        });
        if (!best || score > best.score) best = { score, updates, items, states, order };
      });
      return best;
    }

    function renderSmartWeatherPlan() {
      latestSmartWeatherPlan = calculateSmartWeatherPlan();
      const result = document.getElementById("weather-smart-result");
      if (!result || !latestSmartWeatherPlan) return;
      const warnings = [];
      Object.entries(latestSmartWeatherPlan.states).forEach(([day, state]) => {
        if (state === "heavy") warnings.push(`第${day}日大雨/雷雨：優先留在室內或縮短跨區移動。`);
        if (state === "wind") warnings.push(`第${day}日強風：鎌倉、台場、展望台類活動要保守處理。`);
      });
      result.innerHTML = `
        <strong>智能建議：按目前輸入天氣重排第12-14日</strong>
        <ul>
          ${latestSmartWeatherPlan.items.map(item => `<li>${item}</li>`).join("")}
          ${warnings.map(item => `<li>${item}</li>`).join("")}
        </ul>
      `;
    }

    function renderEarlyWeatherGrid() {
      const grid = document.getElementById("early-weather-grid");
      if (!grid) return;
      grid.innerHTML = Object.entries(earlyWeatherPlan).map(([day, item]) => `
        <article class="early-weather-card">
          <div class="early-weather-top">
            <span class="day-badge">第${day}日</span>
            <strong>${item.risk}</strong>
          </div>
          <h4>${item.headline}</h4>
          <p>${item.advice}</p>
          <div class="weather-action-note">${item.action}</div>
          <div class="weather-tag-row">${renderWeatherBadges(Number(day))}</div>
        </article>
      `).join("");
    }

    function applySmartWeatherPlan() {
      if (!latestSmartWeatherPlan) renderSmartWeatherPlan();
      if (!latestSmartWeatherPlan) return;
      applyPlanUpdates(latestSmartWeatherPlan.updates);
      document.querySelectorAll(".weather-btn").forEach(btn => btn.classList.remove("active"));
      document.getElementById("current-plan-title").textContent = "智能天氣｜已按即時天氣套用到總表預覽";
      document.getElementById("current-plan-desc").innerHTML = latestSmartWeatherPlan.items.map(item => `<li>${item}</li>`).join("");
      switchTab("master-table");
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    function hydrateSavedChecks(root = document) {
      root.querySelectorAll("[data-check]").forEach(box => {
        const key = `jp-travel-check-${box.dataset.check}`;
        box.checked = localStorage.getItem(key) === "true";
        if (box.dataset.boundCheck === "true") return;
        box.dataset.boundCheck = "true";
        box.addEventListener("change", () => {
          localStorage.setItem(key, String(box.checked));
        });
      });
    }

    function validateTripData() {
      const errors = [];
      for (let day = 1; day <= 16; day += 1) {
        if (!itinerary.some(item => item.day === day)) errors.push(`缺少總表第${day}日`);
        if (!details.some(item => item.day === day)) errors.push(`缺少詳情第${day}日`);
        if (!dayShortcuts[day]) errors.push(`缺少快捷路線第${day}日`);
      }
      if (errors.length) console.warn("行程資料檢查失敗：", errors);
      return errors;
    }

    function registerServiceWorker() {
      if (!("serviceWorker" in navigator)) return;
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    }

    function updateConnectionStatus() {
      const banner = document.getElementById("connection-status");
      const offline = !navigator.onLine;
      document.documentElement.classList.toggle("is-offline", offline);
      if (!banner) return;
      banner.hidden = !offline;
    }

    function isStandaloneApp() {
      return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
    }

    function applyStandaloneMode() {
      document.documentElement.classList.toggle("is-standalone", isStandaloneApp());
    }

    applyStandaloneMode();
    window.matchMedia("(display-mode: standalone)").addEventListener?.("change", applyStandaloneMode);
    updateConnectionStatus();
    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);

    async function fallbackCopyText(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.append(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("copy failed");
    }

    async function copyText(text) {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
      await fallbackCopyText(text);
    }

    function bindCopyButtons() {
      document.querySelectorAll("[data-copy]").forEach(button => {
        if (button.dataset.copyBound === "true") return;
        button.dataset.copyBound = "true";
        const originalLabel = button.dataset.copyLabel || button.textContent.trim();
        button.addEventListener("click", async () => {
          const target = document.querySelector(button.dataset.copy);
          if (!target) return;
          try {
            await copyText(target.textContent.trim());
            button.classList.add("is-copied");
            button.textContent = "已複製";
            setTimeout(() => {
              button.classList.remove("is-copied");
              button.textContent = originalLabel;
            }, 1600);
          } catch (error) {
            button.textContent = "複製失敗";
            setTimeout(() => {
              button.textContent = originalLabel;
            }, 1800);
          }
        });
      });
    }

    function bindOfflinePreload() {
      const button = document.getElementById("preload-offline-pack");
      const status = document.getElementById("offline-pack-status");
      if (!button || button.dataset.offlineBound === "true") return;
      button.dataset.offlineBound = "true";
      button.addEventListener("click", async () => {
        if (!("caches" in window)) {
          if (status) status.textContent = "此瀏覽器不支援手動儲存離線包。";
          button.classList.add("is-error");
          return;
        }
        button.classList.remove("is-ready", "is-error");
        button.disabled = true;
        if (status) status.textContent = "正在下載離線包…";
        try {
          const cache = await caches.open(OFFLINE_PACK_CACHE);
          for (const asset of OFFLINE_PACK) {
            try {
              await cache.add(asset);
            } catch (error) {
              console.warn("離線包快取失敗：", asset, error);
            }
          }
          button.classList.add("is-ready");
          if (status) status.textContent = "離線包已準備好。出發前請用飛行模式測試一次。";
        } catch (error) {
          button.classList.add("is-error");
          if (status) status.textContent = "離線包下載失敗。請用穩定 Wi-Fi 打開後再試。";
        } finally {
          button.disabled = false;
        }
      });
    }

    function bindCacheReset() {
      const button = document.getElementById("reset-cache-btn");
      const status = document.getElementById("offline-pack-status");
      if (!button || button.dataset.resetBound === "true") return;
      button.dataset.resetBound = "true";
      button.addEventListener("click", async () => {
        if (!("caches" in window)) {
          if (status) status.textContent = "此瀏覽器沒有可重置的離線快取。";
          return;
        }
        button.disabled = true;
        if (status) status.textContent = "正在重置離線快取…";
        try {
          const keys = await caches.keys();
          await Promise.all(keys.map(key => caches.delete(key)));
          if (navigator.serviceWorker?.getRegistrations) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            await Promise.all(registrations.map(registration => registration.update()));
          }
          if (status) status.textContent = "離線快取已重置，正在重新載入最新版…";
          location.reload();
        } catch (error) {
          button.disabled = false;
          if (status) status.textContent = "重置失敗，請重新整理後再試。";
        }
      });
    }

    document.querySelectorAll("[data-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        switchTab(btn.dataset.tab);
        if (btn.classList.contains("dock-btn")) btn.blur();
        requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
      });
    });
    document.querySelectorAll(".weather-btn").forEach(btn => {
      btn.addEventListener("click", () => simulateWeather(btn.dataset.plan));
    });
    document.querySelectorAll("[data-weather-day]").forEach(select => {
      select.addEventListener("change", renderSmartWeatherPlan);
    });
    document.getElementById("weather-smart-simulate")?.addEventListener("click", renderSmartWeatherPlan);
    document.getElementById("weather-smart-apply")?.addEventListener("click", applySmartWeatherPlan);
    document.querySelectorAll("[data-jump-tab]").forEach(btn => {
      btn.addEventListener("click", event => {
        event.stopPropagation();
        handlePocketAction(btn);
      });
      btn.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          handlePocketAction(btn);
        }
      });
    });
    document.getElementById("today-reset-btn")?.addEventListener("click", () => openDayDetail(1, { compact: true }));
    document.getElementById("expand-all-days")?.addEventListener("click", expandAllDays);
    document.getElementById("collapse-all-days")?.addEventListener("click", collapseAllDays);
    document.addEventListener("click", event => {
      const action = event.target.closest("[data-command-day][data-command-section]");
      if (!action) return;
      openDayDetail(Number(action.dataset.commandDay), {
        compact: true,
        section: action.dataset.commandSection
      });
    });

    validateTripData();
    renderTable();
    renderDetails();
    renderDayIndex();
    initializeCompactDailyView(1);
    renderTodayMode();
    renderHotelPanel();
    hydrateSavedChecks();
    renderMapRoutes();
    renderEarlyWeatherGrid();
    simulateWeather("A");
    bindCopyButtons();
    bindOfflinePreload();
    bindCacheReset();
    registerServiceWorker();
    switchTab(location.hash.replace("#", "") || "today-mode", false);
    if (location.hash) {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        setTimeout(() => window.scrollTo(0, 0), 80);
      });
    }
