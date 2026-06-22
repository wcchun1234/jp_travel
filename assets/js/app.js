    const itinerary = [
      { day: 1, date: "6月27日 Sat", plan: "香港 → 成田機場 → Skyliner → 秋葉原酒店 Check-in", base: "秋葉原", strategy: "到埗日休息。", row: "" },
      { day: 2, date: "6月28日 Sun", plan: "秋葉原電器街 ＋ 上野 ＋ 阿美橫町購物街 ＋ 御徒町", base: "秋葉原", strategy: "原區輕鬆熟習，大雨可退守室內商場。", row: "" },
      { day: 3, date: "6月29日 Mon", plan: "Chiikawa Park ＋ 池袋 Sunshine City ＋ 澀谷 ＋ Shibuya Sky", base: "秋葉原", strategy: "平日避人潮。Shibuya Sky 必須提早搶黃昏票。", row: "row-indigo" },
      { day: 4, date: "6月30日 Tue", plan: "築地市場海鮮早宴 ＋ 增上寺 ＋ 芝公園東京鐵塔", base: "秋葉原", strategy: "平日大啖築地美食，避開週末市場人潮。", row: "" },
      { day: 5, date: "7月1日 Wed", plan: "東京迪士尼海洋 (Tokyo DisneySea) 全日爆玩", base: "秋葉原", strategy: "人潮最少黃金平日。必須提前官網買票，早到搶 App 服務。", row: "row-disney" },
      { day: 6, date: "7月2日 Thu", plan: "春日部蠟筆小新動漫朝聖 → 傍晚直達晴空塔 Solamachi 購物晚餐", base: "秋葉原", strategy: "春日部回程東武線直達押上站，動線比原版更順。", row: "row-amber" },
      { day: 7, date: "7月3日 Fri", plan: "銀座精品百貨 ＋ 有樂町 ＋ 東京車站一番街拉麵街", base: "秋葉原", strategy: "強雨天無敵日。全日連通地下街與大型室內。", row: "" },
      { day: 8, date: "7月4日 Sat", plan: "明治神宮 ＋ 原宿竹下通 ＋ 表參道 ＋ 新宿夜購", base: "秋葉原", strategy: "週末先走大空間神宮/表參道，傍晚轉新宿百貨與夜景。", row: "" },
      { day: 9, date: "7月5日 Sun", plan: "轉酒店（的士大移防）＋ 日本橋/東京站輕鬆熟習", base: "日本橋", strategy: "轉酒店不排預約景點，先安頓行李與新住宿基地。", row: "row-indigo" },
      { day: 10, date: "7月6日 Mon", plan: "teamLab Borderless 早場 ＋ 麻布台 Hills 沉浸式約會日", base: "日本橋", strategy: "早上入場，接近預留一整日慢慢看展與拍照。晚上早回酒店為富士山蓄力。", row: "row-indigo" },
      { day: 11, date: "7月7日 Tue", plan: "富士山 / 河口湖絕景全景一日遊", base: "日本橋", strategy: "最高天氣優先日。視能見度隨時與 Day 12 / 14 互換。", row: "row-rose dynamic-day", dynamic: true },
      { day: 12, date: "7月8日 Wed", plan: "合羽橋道具街 ＋ 蔵前 ＋ 清澄白河咖啡區散步", base: "日本橋", strategy: "富士山後體力休整日。由日本橋出發去這三區極快。", row: "dynamic-day", dynamic: true },
      { day: 13, date: "7月9日 Thu", plan: "鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", base: "日本橋", strategy: "次要好天優先日。沿海暴雨強風時隨時與 Day 14 互換。", row: "row-amber dynamic-day", dynamic: true },
      { day: 14, date: "7月10日 Fri", plan: "新宿大型百貨主力購物 / 台場候補 ＋ 天氣備用終極緩衝日", base: "日本橋", strategy: "新宿作為主力購物日；若天氣好想看海景可改台場，亦可用作補富士山/鎌倉。", row: "row-emerald dynamic-day", dynamic: true },
      { day: 15, date: "7月11日 Sat", plan: "東京站/日本橋伴手禮最後大追加 ＋ 回酒店執行李", base: "日本橋", strategy: "專注百貨公司打包手信，為回程做準備。", row: "" },
      { day: 16, date: "7月12日 Sun", plan: "日本橋酒店 Check-out ｜ 都營淺草線直達成田機場T2 ｜ 回港", base: "—", strategy: "人形町站 Access 特急直達機場。", row: "" }
    ];

    const details = [
      {
        day: 1,
        title: "6月27日 (Sat) ｜ 香港 → 成田 → 秋葉原酒店",
        mood: "city",
        type: "抵達日",
        pace: "輕量",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=300&q=70",
        open: true,
        focus: "到埗日只處理入境、交通卡/eSIM、Skyliner 與酒店 check-in，不排景點，讓身體先適應東京節奏。",
        transport: "成田T2 → 京成 Skyliner 至京成上野 → 行李多建議短程的士到 Hotel Livemax Akihabara Kita；想省錢可轉日比谷線至仲御徒町/秋葉原。",
        timeline: ["06:15 抵香港機場 T2 Aisle U", "09:15 UO848 起飛", "14:45 抵成田T2", "16:15-17:45 Skyliner 入市區", "18:00 前後酒店 check-in，晚上秋葉原簡單晚餐"]
      },
      {
        day: 2,
        title: "6月28日 (Sun) ｜ 秋葉原 ＋ 上野 ＋ 阿美橫町",
        mood: "city",
        type: "原區熟習",
        pace: "輕鬆購物",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "第一個完整日留在酒店附近與上野線上活動，熟悉車站、便利店、藥妝與退稅流程；下雨也容易退守室內。",
        transport: "Hotel Livemax Akihabara Kita 可步行到秋葉原電器街；秋葉原/御徒町/上野之間用 JR 山手線或直接步行串起，減少轉車壓力。",
        timeline: ["10:00 秋葉原電器街慢逛", "12:30 上野午餐", "14:00 阿美橫町與御徒町購物", "17:30 回秋葉原放低戰利品", "晚上視體力補逛 Yodobashi / Animate"]
      },
      {
        day: 3,
        title: "6月29日 (Mon) ｜ Chiikawa Park ＋ 池袋 ＋ 澀谷 ＋ Shibuya Sky",
        mood: "fun",
        type: "預約重點",
        pace: "中高",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "以預約型景點為核心。Chiikawa Park 若未搶到票，改為 Sunshine City / Animate / Pokemon Center，黃昏留給 Shibuya Sky。",
        transport: "秋葉原站 JR 山手線到池袋；池袋到澀谷可用 JR 埼京線或副都心線。Shibuya Sky 建議 18:15-18:45 入場。",
        timeline: ["10:30 池袋 Sunshine City / 角色商店", "Chiikawa Park 按預約時段入場", "15:30 前往澀谷購物", "18:15-18:45 Shibuya Sky 入場", "晚上山手線或銀座線回秋葉原"]
      },
      {
        day: 4,
        title: "6月30日 (Tue) ｜ 築地市場 ＋ 增上寺 ＋ 芝公園東京鐵塔",
        mood: "food",
        type: "美食散策",
        pace: "中等",
        image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "平日早上吃築地，避開週末人潮；下午轉到增上寺與東京鐵塔一帶，行程有戶外也有咖啡店可避雨。",
        transport: "秋葉原/仲御徒町上日比谷線到築地；築地到大門/芝公園可用日比谷線轉都營線，或短程的士節省體力。",
        timeline: ["09:30 築地場外市場早午餐", "12:30 移動至增上寺", "14:00 芝公園與東京鐵塔拍照", "16:00 找咖啡店休息或回酒店", "晚上秋葉原/上野簡單晚餐"]
      },
      {
        day: 5,
        title: "7月1日 (Wed) ｜ 東京迪士尼海洋全日",
        mood: "fun",
        type: "重點樂園",
        pace: "高",
        image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=300&q=70",
        open: true,
        focus: "V12.1 最大新增日。官方 2026/7/1 開放 9:00-21:00，成人 1-Day Passport 7,900円；此日固定性高，不建議隨便對調。",
        transport: "早到首選鐵路：酒店 → 仲御徒町/秋葉原 → 日比谷線八丁堀 → JR 京葉/武藏野線舞濱 → Disney Resort Line 到 Tokyo DisneySea Station。巴士可作少轉乘方案，但官方秋葉原巴士約50-60分鐘，班次要另查。",
        timeline: ["06:25-06:40 酒店出發", "07:45 目標抵達入園排隊", "入園即開 App 購買 DPA / 查 Priority Pass", "上午優先 Fantasy Springs 熱門項目", "20:45-21:30 視體力看 Believe! Sea of Dreams 或提早離園"]
      },
      {
        day: 6,
        title: "7月2日 (Thu) ｜ 春日部小新 → 晴空塔 Solamachi",
        mood: "fun",
        type: "動漫朝聖",
        pace: "中等",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "春日部移動日改良：回程不回秋葉原，直接沿東武線到押上/晴空塔晚餐，動線比原版更順。",
        transport: "仲御徒町/秋葉原 → 北千住 → 東武晴空塔線至春日部。回程由春日部乘東武晴空塔線直達押上，逛 Solamachi 後再回秋葉原。",
        timeline: ["09:30 出發往春日部", "11:00 春日部站 / LaLa Garden 小新", "14:30 春日部街區慢行", "17:00 東武線到押上", "晚上 Solamachi 購物晚餐後回秋葉原"]
      },
      {
        day: 7,
        title: "7月3日 (Fri) ｜ 銀座 ＋ 有樂町 ＋ 東京車站一番街",
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
        title: "7月4日 (Sat) ｜ 明治神宮 ＋ 原宿 ＋ 表參道 ＋ 新宿夜購",
        mood: "nature",
        type: "週末散步",
        pace: "中等",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "週末避開狹窄室內長排隊，早上先到明治神宮遮蔭散步，下午原宿/表參道，傍晚轉新宿 Isetan / Lumine / NEWoMan 做第一輪百貨購物。",
        transport: "秋葉原 JR 山手線到原宿；原宿、明治神宮前、表參道可步行串連。表參道到新宿可用 JR 山手線或副都心線轉乘；晚上由新宿 JR 直回秋葉原。",
        timeline: ["09:30 明治神宮與代代木公園外圍", "12:00 原宿午餐", "13:30 竹下通 / Cat Street 快速掃街", "15:30 表參道咖啡與選物店", "17:30 新宿 Isetan / Lumine / NEWoMan 夜購", "晚上回秋葉原收拾轉酒店前行李"]
      },
      {
        day: 9,
        title: "7月5日 (Sun) ｜ 轉酒店 ＋ 日本橋/東京站輕鬆熟習",
        mood: "fun",
        type: "換基地",
        pace: "低壓",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "轉酒店日不再安排 teamLab 或其他重預約景點。今日重點是順利搬行李、熟習日本橋/人形町生活圈、補午餐與輕鬆購物。",
        transport: "Hotel Livemax Akihabara Kita → 的士至 Hotel Horidome Villa 寄存行李。之後以日本橋、東京站、人形町步行圈為主；買重物可先回酒店放低。",
        timeline: ["10:00 舊酒店退房", "10:15-10:45 的士轉移行李並寄存", "12:00 日本橋/人形町午餐", "14:00 東京站一番街或日本橋百貨輕鬆逛", "17:00 後回 Hotel Horidome Villa check-in"]
      },
      {
        day: 10,
        title: "7月6日 (Mon) ｜ teamLab Borderless 早場 ＋ 麻布台 Hills",
        mood: "fun",
        type: "沉浸約會",
        pace: "接近全日",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "teamLab Borderless 不應塞在轉酒店日。今日改為早上入場，預留接近一整日慢慢看展、拍照、休息與麻布台 Hills 約會散策。",
        transport: "Hotel Horidome Villa → 人形町/小傳馬町一帶 → 日比谷線到神谷町，步行接麻布台 Hills / teamLab Borderless。回程同線回日本橋，晚上不要排太夜，為翌日富士山保留體力。",
        timeline: ["09:00-09:30 日本橋出發往神谷町", "10:00 teamLab Borderless 早場入場", "12:30-13:30 麻布台 Hills 午餐休息", "14:00-16:30 回展區或慢逛麻布台/六本木周邊", "18:00 前後回日本橋，早休息準備 Day 11 富士山"]
      },
      {
        day: 11,
        title: "7月7日 (Tue) ｜ 富士山 / 河口湖",
        mood: "nature",
        type: "好天優先",
        pace: "高",
        image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "最高天氣優先日。若雲層厚、能見度低，直接與 Day 12 或 Day 14 對調，不要硬上看不到山的一日遊。",
        transport: "若巴士團新宿集合：由馬喰橫山搭都營新宿線至新宿，另預留20分鐘找西口集合點。若集合地改為東京站，則由日本橋步行/的士更簡單。",
        timeline: ["06:15-06:25 酒店出門", "07:15-07:30 新宿或東京站集合", "新倉山、忍野八海、大石公園視所選團而定", "18:30-20:00 回到市區", "晚上直接回日本橋休息"]
      },
      {
        day: 12,
        title: "7月8日 (Wed) ｜ 合羽橋 ＋ 蔵前 ＋ 清澄白河",
        mood: "food",
        type: "文青休整",
        pace: "輕中",
        image: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "承接文青行程。由日本橋出發到合羽橋、蔵前、清澄白河比原秋葉原版本更平均，也適合作為富士山後的恢復日。",
        transport: "人形町/小傳馬町出發，視當日路線用淺草線、大江戶線與短程的士組合；全日保持低強度散步。",
        timeline: ["10:30 合羽橋道具街", "12:30 蔵前午餐/咖啡", "14:30 蔵前雜貨與文具店", "16:00 清澄白河咖啡區散步", "傍晚回日本橋/東京站晚餐"]
      },
      {
        day: 13,
        title: "7月9日 (Thu) ｜ 鎌倉 / 江之島",
        mood: "nature",
        type: "沿海一日遊",
        pace: "高",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "次要好天優先日。海邊強風雨時與 Day 14 購物緩衝互換；若天氣好，早出發會舒服很多。",
        transport: "自助最順：步行至新日本橋站，乘 JR 總武快速 / 橫須賀線直達鎌倉。再接江之電到長谷、鎌倉高校前、江之島。",
        timeline: ["08:30-09:00 日本橋出發", "10:00 鎌倉站 / 小町通", "11:30 鶴岡八幡宮", "13:30 長谷大佛與江之電沿海段", "16:30 江之島或湘南海岸視天氣決定"]
      },
      {
        day: 14,
        title: "7月10日 (Fri) ｜ 新宿大型百貨主力購物 / 台場候補",
        mood: "buffer",
        type: "終極緩衝",
        pace: "彈性",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "完全空白預約日，用作收復前段因梅雨失地的防線。若富士山與鎌倉已完成，今天主攻新宿大型百貨與藥妝；若天氣很好且想看海景，可改台場/彩虹大橋。",
        transport: "新宿購物線：馬喰橫山/岩本町一帶可搭都營新宿線直達新宿，或由東京站轉 JR。台場線：日本橋/人形町到新橋，轉百合海鷗線往台場；雨天不建議硬去海邊。",
        timeline: ["10:30 新宿 Isetan / Lumine / NEWoMan 主力購物", "13:00 新宿午餐與藥妝補貨", "15:00 視體力加 Shinjuku Takashimaya / Don Quijote", "17:30 回酒店放低物品", "晚上若好天可改台場看彩虹大橋夜景，否則早回酒店"]
      },
      {
        day: 15,
        title: "7月11日 (Sat) ｜ 東京站/日本橋手信 ＋ 執行李",
        mood: "city",
        type: "收尾整理",
        pace: "輕鬆",
        image: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=300&q=70",
        open: false,
        focus: "最後完整日專注百貨、手信、退稅與行李重量控制，不再跨區奔走，為翌日回程降低風險。",
        transport: "Hotel Horidome Villa 可步行/短程車到人形町、日本橋、東京站。買重物後先回酒店放低，再決定是否補最後一輪。",
        timeline: ["10:30 日本橋百貨/藥妝", "12:30 東京站午餐與伴手禮", "15:30 回酒店整理行李", "17:30 最後補買缺口", "晚上早回酒店完成打包"]
      },
      {
        day: 16,
        title: "7月12日 (Sun) ｜ 日本橋 → 成田T2 → 回港",
        mood: "buffer",
        type: "回程日",
        pace: "穩陣",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=300&q=70",
        open: true,
        focus: "回程日不排景點。保留退稅、行李、安檢及機場購物時間，避免最後一日交通壓力。",
        transport: "Hotel Horidome Villa → 人形町站 → 都營淺草線直通京成 Narita Sky Access / Access 特急到成田機場T2。注意 Skyliner 不經人形町。",
        timeline: ["10:30 最後檢查行李與護照", "12:15-12:30 市區出發", "13:45-14:00 抵成田T2", "17:05 UO871 起飛", "21:00 抵香港T1"]
      }
    ];

    const dayGuides = {
      1: {
        budget: { total: "約 ¥4,500-7,500 / 人 + 晚餐", lines: ["Skyliner + JR/地鐵約 ¥2,600-2,700；短程的士到酒店約 ¥1,500-2,500 / 車。", "晚餐建議 ¥1,200-2,500 / 人；便利店補水/早餐約 ¥800-1,500。", "費用以 2026 出發前官方/Google Maps 顯示為準。"] },
        transportSteps: ["成田T2 入境後先處理 eSIM / Suica / Skyliner。", "Skyliner 到京成上野或日暮里，再用 JR/的士到秋葉原北。", "行李多直接的士到 Hotel Livemax Akihabara Kita，今天不省這段體力。"],
        food: ["秋葉原：拉麵、牛丼、壽司郎/迴轉壽司，選不用排隊的。", "便利店買水、早餐、濕紙巾；回酒店前先補齊。", "如果太累，直接附近商場或車站便當。"],
        ready: ["護照、入境 QR、酒店地址截圖。", "Skyliner / IC 卡付款方式。", "Google Maps 先收藏酒店與京成上野。"]
      },
      2: {
        budget: { total: "約 ¥3,500-8,000 / 人 + 購物", lines: ["市區交通約 ¥300-700；步行可壓低成本。", "午晚餐約 ¥2,500-5,000；藥妝/電器另計。", "若一天搭多次 Metro/Toei，可比較 24h 地鐵券 ¥1,000。"] },
        transportSteps: ["秋葉原、御徒町、上野可 JR 一兩站或直接步行串起。", "買重物先回酒店放低，再出第二輪。", "雨大時優先 Yodobashi、atre、上野商場與地下通道。"],
        food: ["阿美橫町：海鮮丼、串燒、街頭小食。", "上野：洋食、拉麵、甜品咖啡都多。", "秋葉原晚餐：拉麵、燒肉、牛丼，選離酒店近的。"],
        ready: ["列好藥妝/電器清單和退稅護照。", "確認酒店附近超市/便利店。", "第一天不要買太多大件。"]
      },
      3: {
        budget: { total: "約 ¥8,000-18,000 / 人 + 角色商品", lines: ["交通約 ¥600-1,000；池袋到澀谷可 JR/副都心線。", "Shibuya Sky 票價以官方當日為準，先預約黃昏時段。", "Chiikawa Park / 角色商品按實際抽選與購買控制預算。"] },
        transportSteps: ["秋葉原 → 池袋：JR 山手線最簡單。", "池袋 → 澀谷：JR 埼京線/山手線或副都心線。", "Shibuya Sky 入場前 30-45 分鐘到澀谷，避免找入口慌張。"],
        food: ["池袋 Sunshine City：午餐選商場餐廳，穩定少風險。", "澀谷：PARCO / Scramble Square 餐廳，適合接夜景。", "甜品：Miyashita Park / 澀谷咖啡店作休息點。"],
        ready: ["Chiikawa 票/抽選截圖。", "Shibuya Sky QR 與天氣風險確認。", "角色商品優先清單，避免失控。"]
      },
      4: {
        budget: { total: "約 ¥5,000-10,000 / 人", lines: ["地鐵/JR 約 ¥500-900；短程的士備用約 ¥1,500-2,500 / 車。", "築地早午餐約 ¥2,500-5,000；咖啡/甜品約 ¥800-1,500。", "東京鐵塔若入場需另計門票，純外拍免費。"] },
        transportSteps: ["仲御徒町/秋葉原 → 築地：日比谷線最順。", "築地 → 增上寺/芝公園：地鐵轉都營線或短程的士。", "雨天把戶外拍照縮短，改咖啡店/商場。"],
        food: ["築地場外市場是海鮮與傳統食材集中地，適合早午餐。", "推薦方向：壽司、海鮮丼、玉子燒、烤海鮮。", "下午芝公園附近找咖啡店休腳。"],
        ready: ["築地熱門店早去，不要排一間排太久。", "帶現金，小店未必完全支援卡。", "雨傘/防曬，東京鐵塔拍照看天氣。"]
      },
      5: {
        budget: { total: "約 ¥18,000-35,000 / 人", lines: ["1-Day Passport 成人官方顯示由 ¥7,900 起，日期變動價。", "市區往返 + Resort Line 約 ¥1,200-2,000。", "DPA / 餐飲 / 週邊可快速增加，建議先定上限。"] },
        transportSteps: ["早到首選：日比谷線八丁堀 → JR 京葉線舞濱 → Resort Line。", "06:25-06:40 出門，目標 07:45 到閘口。", "回程看體力，閉園人潮大時不要急衝。"],
        food: ["早餐：酒店附近便利店飯糰/咖啡，入園前先吃。", "午晚餐：用官方 App 看 Mobile Order / 餐廳等候。", "下午補水和小食，比硬排餐廳更重要。"],
        ready: ["官方 App 登入、門票加入 App、信用卡綁定。", "DPA / Priority Pass 目標排序。", "雨衣、行動電源、輕便鞋。"]
      },
      6: {
        budget: { total: "約 ¥5,000-11,000 / 人 + 購物", lines: ["東武/JR/地鐵交通約 ¥1,200-2,000。", "春日部小新周邊與 Solamachi 購物另計。", "晚餐晴空塔商場約 ¥1,500-3,500 / 人。"] },
        transportSteps: ["秋葉原/仲御徒町 → 北千住 → 東武線至春日部。", "回程春日部 → 押上，直接接晴空塔 Solamachi。", "晚上押上/淺草線或 JR 組合回秋葉原。"],
        food: ["春日部午餐：車站附近簡單定食/拉麵。", "Solamachi 晚餐：商場餐廳選擇多，雨天穩。", "想甜品可留在 Solamachi 吃。"],
        ready: ["小新目標點先存 Google Maps。", "不要買太重，晚上還要轉車。", "查東武線回押上班次。"]
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
        transportSteps: ["日本橋/人形町 → 神谷町方向，步行接麻布台 Hills。", "teamLab 早場入場，預留 3-4 小時以上。", "晚餐不要排太遠，翌日富士山要早起。"],
        food: ["麻布台 Hills：午餐、咖啡、甜品集中，適合慢慢拍照休息。", "六本木/神谷町周邊可作候補。", "晚餐回日本橋會更穩。"],
        ready: ["teamLab QR、入場時間、充電。", "穿淺色/好拍但好走的鞋。", "相機/手機容量清空。"]
      },
      11: {
        budget: { total: "約 ¥12,000-25,000 / 人", lines: ["Local tour / 巴士團價格依平台與路線而定；集合交通另計。", "早餐/午餐/晚餐約 ¥3,000-6,000。", "天氣差時不要硬去，改 Day 12/14 可保護體驗。"] },
        transportSteps: ["若新宿集合：都營新宿線到新宿，預留找集合點時間。", "若東京站集合：日本橋基地更方便，的士/步行可控。", "回程晚，直接回酒店，不再加購物。"],
        food: ["早餐便利店先買好，在集合前吃。", "午餐多數看團安排/河口湖周邊。", "回市區後簡單定食/便利店，重點是休息。"],
        ready: ["前一晚看能見度/雲量/雨量。", "集合點截圖、導遊聯絡、退款改期政策。", "薄外套、暈車藥、行動電源。"]
      },
      12: {
        budget: { total: "約 ¥5,000-11,000 / 人", lines: ["地鐵/短程轉車約 ¥500-1,200。", "咖啡/午餐/晚餐約 ¥3,500-7,000。", "合羽橋廚具/雜貨購物另計。"] },
        transportSteps: ["日本橋 → 合羽橋，可地鐵 + 步行或短程的士。", "合羽橋 → 蔵前 → 清澄白河，保持單向移動。", "體力不足可刪清澄白河，早回酒店。"],
        food: ["合羽橋/淺草周邊：定食、蕎麥、甜品。", "蔵前：咖啡、烘焙、文具雜貨。", "清澄白河：咖啡散步日重點。"],
        ready: ["想買廚具先量行李空間。", "咖啡店收藏 2-3 間，不排死一間。", "今天是恢復日，不排太滿。"]
      },
      13: {
        budget: { total: "約 ¥7,000-15,000 / 人", lines: ["JR 往返鎌倉 + 江之電約 ¥2,000-3,500。", "寺院/大佛等小額門票另計。", "午晚餐約 ¥3,500-7,000，沿海咖啡另計。"] },
        transportSteps: ["新日本橋 → JR 總武快速/橫須賀線直達鎌倉最順。", "鎌倉站 → 長谷大佛 → 江之電沿海段 → 江之島視天氣。", "強風雨時直接與 Day 14 互換。"],
        food: ["小町通：小食、甜品、抹茶。", "長谷/江之島：海鮮、咖啡、海景餐廳。", "回東京後若累，東京站買便當。"],
        ready: ["查沿海風雨與江之電狀態。", "穿防滑好走鞋。", "海邊防曬/帽/小毛巾。"]
      },
      14: {
        budget: { total: "約 ¥5,000-20,000+ / 人", lines: ["新宿交通約 ¥500-900；台場候補交通約 ¥1,000-1,800。", "餐飲約 ¥3,000-6,000；購物按清單控制。", "若補富士山/鎌倉，改用相應預算。"] },
        transportSteps: ["日本橋/馬喰橫山 → 新宿：都營新宿線或 JR 轉乘。", "新宿站大，先定 Isetan / Lumine / NEWoMan 順序。", "台場候補：新橋轉百合海鷗線，強風雨不去。"],
        food: ["新宿：百貨餐廳、地下食品樓、咖啡甜品都穩。", "想輕鬆可在 NEWoMan / Takashimaya 內解決。", "台場候補：DiverCity / Aqua City 餐廳。"],
        ready: ["購物清單分必買/可買。", "退稅護照、信用卡、行李空間。", "保留天氣對調權，不要預約死。"]
      },
      15: {
        budget: { total: "約 ¥5,000-16,000 / 人 + 手信", lines: ["交通低，主要步行/短程地鐵約 ¥300-800。", "餐飲約 ¥3,000-6,000。", "手信、甜品、藥妝、退稅按最後清單。"] },
        transportSteps: ["日本橋、人形町、東京站集中處理。", "買重物後先回酒店放低，再出第二輪。", "晚上留 90 分鐘以上執行李與秤重。"],
        food: ["東京站：便當、甜品、拉麵街、Character Street 附近。", "日本橋百貨：餐廳和食品樓適合手信收尾。", "人形町：最後一餐可選附近老店方向。"],
        ready: ["整理退稅單/收據。", "確認行李重量和液體限制。", "回程交通路線截圖。"]
      },
      16: {
        budget: { total: "約 ¥3,500-7,000 / 人 + 機場購物", lines: ["人形町至成田T2 Access 特急/都營淺草線直通約 ¥1,500-2,000 量級，實際以當日 IC 顯示為準。", "機場餐飲/手信約 ¥2,000-5,000。", "預留交通備用金，不要最後花光現金。"] },
        transportSteps: ["Hotel Horidome Villa → 人形町站，搭都營淺草線直通京成方向。", "確認列車是往成田機場方向，不要上錯羽田方向。", "13:45-14:00 抵成田T2，留足退稅/安檢/購物。"],
        food: ["酒店附近簡單早餐或便利店。", "成田T2：過安檢前後都有餐飲，時間比市區更重要。", "上機前買水與小食。"],
        ready: ["護照、機票、行李、退稅品。", "Access 特急路線截圖。", "UO871 17:05 起飛，至少提前 3 小時到機場。"]
      }
    };

    const dayShortcuts = {
      1: { origin: "Narita Airport Terminal 2", destination: "Hotel Livemax Akihabara Kita", transportLabel: "成田T2 → 秋葉原酒店", foodQuery: "restaurants near Hotel Livemax Akihabara Kita Akihabara", foodLabel: "酒店附近晚餐" },
      2: { origin: "Hotel Livemax Akihabara Kita", destination: "Ameyoko Shopping District Ueno", transportLabel: "酒店 → 上野/阿美橫町", foodQuery: "restaurants Ameyoko Ueno Tokyo", foodLabel: "阿美橫町美食" },
      3: { origin: "Hotel Livemax Akihabara Kita", destination: "Shibuya Sky Tokyo", waypoints: ["Sunshine City Ikebukuro Tokyo"], transportLabel: "秋葉原 → 池袋 → Shibuya Sky", foodQuery: "restaurants near Shibuya PARCO Tokyo", foodLabel: "澀谷晚餐" },
      4: { origin: "Hotel Livemax Akihabara Kita", destination: "Tokyo Tower", waypoints: ["Tsukiji Outer Market"], transportLabel: "秋葉原 → 築地 → 東京鐵塔", foodQuery: "restaurants Tsukiji Outer Market Tokyo", foodLabel: "築地早午餐" },
      5: { origin: "Hotel Livemax Akihabara Kita", destination: "Tokyo DisneySea", transportLabel: "酒店 → Tokyo DisneySea", foodQuery: "restaurants Tokyo DisneySea", foodLabel: "DisneySea 餐廳" },
      6: { origin: "Hotel Livemax Akihabara Kita", destination: "Tokyo Skytree Town Solamachi", waypoints: ["Kasukabe Station"], transportLabel: "秋葉原 → 春日部 → 晴空塔", foodQuery: "restaurants Tokyo Solamachi Skytree", foodLabel: "Solamachi 晚餐" },
      7: { origin: "Hotel Livemax Akihabara Kita", destination: "Tokyo Character Street", waypoints: ["GINZA SIX Tokyo"], transportLabel: "秋葉原 → 銀座 → 東京站", foodQuery: "restaurants Tokyo Ramen Street Tokyo Station", foodLabel: "東京站晚餐" },
      8: { origin: "Hotel Livemax Akihabara Kita", destination: "Isetan Shinjuku Tokyo", waypoints: ["Meiji Jingu Tokyo", "Omotesando Hills"], transportLabel: "秋葉原 → 原宿表參道 → 新宿", foodQuery: "restaurants Shinjuku Isetan Lumine Tokyo", foodLabel: "新宿晚餐" },
      9: { origin: "Hotel Livemax Akihabara Kita", destination: "Hotel Horidome Villa Tokyo", transportLabel: "秋葉原酒店 → 日本橋酒店", foodQuery: "restaurants Ningyocho Nihonbashi Tokyo", foodLabel: "人形町/日本橋午餐" },
      10: { origin: "Hotel Horidome Villa Tokyo", destination: "teamLab Borderless Azabudai Hills", transportLabel: "日本橋酒店 → teamLab", foodQuery: "restaurants Azabudai Hills Tokyo", foodLabel: "麻布台 Hills 餐廳" },
      11: { origin: "Hotel Horidome Villa Tokyo", destination: "Shinjuku Station", transportLabel: "酒店 → 富士山團集合點", foodQuery: "restaurants near Shinjuku Station breakfast", foodLabel: "集合前早餐" },
      12: { origin: "Hotel Horidome Villa Tokyo", destination: "Kiyosumi-Shirakawa Station", waypoints: ["Kappabashi Dougu Street", "Kuramae Station"], transportLabel: "日本橋 → 合羽橋 → 蔵前 → 清澄白河", foodQuery: "cafes Kiyosumi Shirakawa Tokyo", foodLabel: "清澄白河咖啡" },
      13: { origin: "Hotel Horidome Villa Tokyo", destination: "Enoshima Station", waypoints: ["Kamakura Station", "Kotoku-in Kamakura"], transportLabel: "日本橋 → 鎌倉 → 江之島", foodQuery: "restaurants Komachi dori Kamakura", foodLabel: "鎌倉小町通美食" },
      14: { origin: "Hotel Horidome Villa Tokyo", destination: "Isetan Shinjuku Tokyo", transportLabel: "日本橋 → 新宿購物", foodQuery: "restaurants Shinjuku NEWoMan Takashimaya", foodLabel: "新宿百貨餐廳" },
      15: { origin: "Hotel Horidome Villa Tokyo", destination: "Tokyo Character Street", waypoints: ["Coredo Muromachi"], transportLabel: "酒店 → 日本橋 → 東京站", foodQuery: "restaurants Tokyo Station Daimaru Tokyo", foodLabel: "東京站收尾餐" },
      16: { origin: "Hotel Horidome Villa Tokyo", destination: "Narita Airport Terminal 2", transportLabel: "日本橋酒店 → 成田T2", foodQuery: "restaurants Narita Airport Terminal 2", foodLabel: "成田T2 餐飲" }
    };

    const todayModeMeta = {
      1: { leave: "14:45 到埗後", target: "18:00 Check-in", statuses: ["Need check", "Arrival"], checks: ["護照與入境 QR", "eSIM / Suica 可用", "Skyliner / 交通付款準備好", "酒店地址已截圖"] },
      2: { leave: "10:00", target: "上野午餐", statuses: ["Flexible", "Rain OK"], checks: ["帶購物袋", "酒店附近車站先收藏", "退稅護照帶身上", "雨具按天氣決定"] },
      3: { leave: "10:00", target: "18:15 Shibuya Sky", statuses: ["Booked?", "High priority"], checks: ["Chiikawa / 候補方案確認", "Shibuya Sky 票券", "手機電量足夠", "晚霞時段天氣再確認"] },
      4: { leave: "09:15", target: "築地早午餐", statuses: ["Food", "Flexible"], checks: ["早上先查築地店舖營業", "雨具", "東京鐵塔路線收藏", "晚餐保留彈性"] },
      5: { leave: "06:25-06:40", target: "07:45 DisneySea", statuses: ["Fixed", "Booked", "High priority"], checks: ["DisneySea ticket in App", "Credit card linked", "Power bank", "eSIM working"] },
      6: { leave: "09:30", target: "17:00 Solamachi", statuses: ["Anime", "Route day"], checks: ["春日部/押上路線收藏", "小新景點營業確認", "回程直達晴空塔", "買重物後早回酒店"] },
      7: { leave: "10:30", target: "東京站晚餐", statuses: ["Rain OK", "Shopping"], checks: ["退稅護照", "購物清單", "東京站一番街收藏", "行李空間確認"] },
      8: { leave: "09:30", target: "17:30 新宿", statuses: ["Weekend", "Shopping"], checks: ["好走鞋", "明治神宮先去", "新宿百貨收藏", "轉酒店前整理行李"] },
      9: { leave: "10:00", target: "17:00 Check-in", statuses: ["Hotel move", "Low stress"], checks: ["舊酒店退房", "的士/行李路線", "新酒店地址截圖", "不要排預約景點"] },
      10: { leave: "09:00-09:30", target: "10:00 teamLab", statuses: ["Booked", "Photo day"], checks: ["teamLab QR", "相機/手機容量", "好走鞋", "晚上早回酒店"] },
      11: { leave: "06:15-06:25", target: "07:15 集合", statuses: ["Weather flexible", "Nature"], checks: ["前一晚查能見度", "集合點截圖", "暈車藥/外套", "雨天啟動天氣模擬"] },
      12: { leave: "10:30", target: "咖啡休整", statuses: ["Flexible", "Rain OK"], checks: ["咖啡店收藏", "合羽橋購物空間", "保持低強度", "可與富士山互換"] },
      13: { leave: "08:30-09:00", target: "鎌倉午前到", statuses: ["Weather flexible", "Coast"], checks: ["查沿海風雨", "江之電狀態", "防滑鞋", "強風改 Day 14"] },
      14: { leave: "10:30", target: "新宿購物", statuses: ["Buffer", "Rain OK"], checks: ["購物清單", "退稅護照", "天氣模擬是否要補行程", "買重物先回酒店"] },
      15: { leave: "10:30", target: "15:30 整理行李", statuses: ["Packing", "Low risk"], checks: ["手信清單", "行李重量", "退稅收據", "回程路線截圖"] },
      16: { leave: "12:15-12:30", target: "13:45 成田T2", statuses: ["Return", "Fixed"], checks: ["護照機票", "Access 特急方向", "退稅品", "17:05 UO871"] }
    };

    const plans = {
      A: {
        title: "Plan A ｜ 預設好天氣行程",
        items: [
          "7月7日 Day 11：富士山 / 河口湖一日遊。",
          "7月8日 Day 12：合羽橋 + 蔵前 + 清澄白河低強度休整。",
          "7月9日 Day 13：鎌倉 / 江之島一日遊。",
          "7月10日 Day 14：新宿大型百貨主力購物 / 台場候補與緩衝。"
        ],
        updates: {
          11: ["富士山 / 河口湖絕景全景一日遊", "最高天氣優先日。視能見度隨時與 Day 12 / 14 互換。"],
          12: ["合羽橋道具街 ＋ 蔵前 ＋ 清澄白河咖啡區散步", "富士山後體力休整日。由日本橋出發去這三區極快。"],
          13: ["鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", "次要好天優先日。沿海暴雨強風時隨時與 Day 14 互換。"],
          14: ["新宿大型百貨主力購物 / 台場候補 ＋ 天氣備用終極緩衝日", "新宿作為主力購物日；若好天想看海景可改台場，亦可補富士山/鎌倉。"]
        }
      },
      B: {
        title: "Plan B ｜ 7月7日富士山大雨，與 Day 12 對調",
        items: [
          "7月7日 Day 11：改做合羽橋 + 蔵前 + 清澄白河。",
          "7月8日 Day 12：若轉晴，補做富士山 / 河口湖。",
          "7月9日 Day 13：鎌倉維持。",
          "7月10日 Day 14：保留最大緩衝。"
        ],
        updates: {
          11: ["合羽橋道具街 ＋ 蔵前 ＋ 清澄白河咖啡區散步", "因富士山天雨，今日改為市區文青低強度日。"],
          12: ["富士山 / 河口湖絕景全景一日遊", "若能見度回升，今日補做富士山。"],
          13: ["鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", "維持次優先好天日。"],
          14: ["新宿大型百貨主力購物 / 台場候補 ＋ 天氣備用終極緩衝日", "保留緩衝；雨天主攻新宿百貨，好天可補台場。"]
        }
      },
      C: {
        title: "Plan C ｜ 7月9日鎌倉強風雨，與 Day 14 互換",
        items: [
          "7月7日 Day 11：富士山照原定完成。",
          "7月8日 Day 12：合羽橋 + 蔵前 + 清澄白河。",
          "7月9日 Day 13：改為大型購物補遺。",
          "7月10日 Day 14：天氣回穩後補鎌倉/江之島。"
        ],
        updates: {
          11: ["富士山 / 河口湖絕景全景一日遊", "已順利完成。"],
          12: ["合羽橋道具街 ＋ 蔵前 ＋ 清澄白河咖啡區散步", "正常休整。"],
          13: ["全東京最大購物補遺（新宿/澀谷/東京站）", "因沿海強風雨，今日與 Day 14 互換，先做室內購物。"],
          14: ["鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", "利用緩衝日補上鎌倉。"]
        }
      },
      D: {
        title: "Plan D ｜ 富士山與鎌倉兩日皆遇雨",
        items: [
          "7月7日 Day 11：合羽橋 + 蔵前 + 清澄白河。",
          "7月8日 Day 12：搶好天補富士山。",
          "7月9日 Day 13：室內購物補遺，台場先不硬排。",
          "7月10日 Day 14：補鎌倉/江之島。"
        ],
        updates: {
          11: ["合羽橋道具街 ＋ 蔵前 ＋ 清澄白河咖啡區散步", "全面退守市區低風險行程。"],
          12: ["富士山 / 河口湖絕景全景一日遊", "搶天氣窗口補做富士山。"],
          13: ["全東京最大購物補遺（新宿/澀谷/東京站）", "避開沿海惡劣天氣，保留鎌倉給明日；台場不作雨天優先。"],
          14: ["鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）", "使用終極緩衝日補鎌倉。"]
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

    const flexibleWeatherDays = [11, 12, 13, 14];

    const weatherActivities = {
      fuji: {
        name: "富士山 / 河口湖絕景全景一日遊",
        short: "富士山",
        strategy: "好天及能見度優先；若雲厚或雨大，寧願換去市區日。",
        score: { clear: 10, cloudy: 5, rain: 1, heavy: -4, wind: 0 }
      },
      city: {
        name: "合羽橋道具街 ＋ 蔵前 ＋ 清澄白河咖啡區散步",
        short: "市區咖啡",
        strategy: "雨天可縮短步行並多用咖啡店/雜貨店休息，適合承接壞天氣。",
        score: { clear: 6, cloudy: 8, rain: 8, heavy: 5, wind: 7 }
      },
      kamakura: {
        name: "鎌倉古都 / 江之島一日遊（大佛、江之電、湘南海岸）",
        short: "鎌倉",
        strategy: "海邊怕強風與暴雨；好天或多雲少雨才值得早出發。",
        score: { clear: 9, cloudy: 7, rain: 2, heavy: -4, wind: -5 }
      },
      shopping: {
        name: "新宿大型百貨主力購物 / 台場候補 ＋ 天氣備用終極緩衝日",
        short: "新宿購物",
        strategy: "雨天最穩的防線；好天時可改台場或補回富士山/鎌倉。",
        score: { clear: 6, cloudy: 8, rain: 10, heavy: 9, wind: 9 }
      }
    };

    const defaultWeatherActivityByDay = {
      11: "fuji",
      12: "city",
      13: "kamakura",
      14: "shopping"
    };

    let latestSmartWeatherPlan = null;

    const mapRoutes = {
      "all-tokyo": {
        label: "全部重點",
        day: "Trip",
        icon: "travel_explore",
        title: "Trip Map｜酒店、景點、購物、回程重點",
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
        day: "Day 1-8",
        icon: "hotel",
        title: "Hotel｜Hotel Livemax Akihabara Kita",
        desc: "前半段基地。秋葉原、上野、池袋澀谷、DisneySea、春日部晴空塔都由這裡出發。",
        origin: "Narita Airport Terminal 2",
        destination: "Hotel Livemax Akihabara Kita",
        stops: ["Narita Airport Terminal 2", "Keisei Ueno Station", "Hotel Livemax Akihabara Kita", "Akihabara Station Tokyo", "Naka-Okachimachi Station Tokyo"],
        query: "Hotel Livemax Akihabara Kita Akihabara Station Naka-Okachimachi Station Keisei Ueno Station",
        note: "到埗日行李多，Skyliner 到京成上野後可短程的士去酒店；平日出門記住先確認最近車站入口。"
      },
      "nihonbashi-hotel": {
        label: "日本橋酒店",
        day: "Day 9-16",
        icon: "apartment",
        title: "Hotel｜Hotel Horidome Villa",
        desc: "後半段基地。teamLab、富士山/鎌倉集合、東京站手信與成田回程都靠這裡控風險。",
        origin: "Hotel Livemax Akihabara Kita",
        destination: "Hotel Horidome Villa Tokyo",
        stops: ["Hotel Livemax Akihabara Kita", "Hotel Horidome Villa Tokyo", "Ningyocho Station Tokyo", "Kodemmacho Station Tokyo", "Tokyo Station"],
        query: "Hotel Horidome Villa Tokyo Ningyocho Station Kodemmacho Station Tokyo Station",
        note: "回程日重點是人形町/都營淺草線直通成田方向；最後兩天不要把重物帶太遠。"
      },
      shinjuku: {
        label: "新宿",
        day: "Day 14",
        icon: "shopping_bag",
        title: "Day 14｜新宿主力購物",
        desc: "百貨、藥妝、服飾與伴手禮集中處理。雨天最穩，買重物後可直接回日本橋酒店。",
        origin: "Hotel Horidome Villa Tokyo",
        destination: "Isetan Shinjuku Tokyo",
        stops: ["Isetan Shinjuku Tokyo", "Lumine Shinjuku Tokyo", "NEWoMan Shinjuku Tokyo", "Shinjuku Takashimaya Tokyo"],
        query: "Isetan Shinjuku Tokyo Lumine Shinjuku NEWoMan Shinjuku",
        note: "建議把 Isetan、Lumine、NEWoMan 先存到 Google Maps 清單，到現場按營業時間和退稅排隊狀況微調。"
      },
      shibuya: {
        label: "澀谷",
        day: "Day 3",
        icon: "favorite",
        title: "Day 3｜池袋 → 澀谷 → Shibuya Sky",
        desc: "角色店、潮流購物、晚霞展望台串成一條約會線，黃昏時段最漂亮。",
        origin: "Sunshine City Ikebukuro Tokyo",
        destination: "Shibuya Sky Tokyo",
        stops: ["Sunshine City Ikebukuro Tokyo", "Shibuya PARCO Tokyo", "Miyashita Park Shibuya", "Shibuya Sky Tokyo"],
        query: "Sunshine City Ikebukuro Shibuya PARCO Miyashita Park Shibuya Sky",
        note: "Shibuya Sky 要預約黃昏票；如果下雨或強風，澀谷購物仍可保留，展望台按官方營運調整。"
      },
      harajuku: {
        label: "原宿表參道",
        day: "Day 8",
        icon: "styler",
        title: "Day 8｜明治神宮 → 原宿 → 表參道 → 新宿",
        desc: "早上走神宮大空間，下午潮流街區，傍晚接新宿夜購，適合拍照和散步。",
        origin: "Meiji Jingu Tokyo",
        destination: "Isetan Shinjuku Tokyo",
        stops: ["Meiji Jingu Tokyo", "Takeshita Street Harajuku", "Cat Street Harajuku", "Omotesando Hills", "Isetan Shinjuku Tokyo"],
        query: "Meiji Jingu Takeshita Street Cat Street Omotesando Hills Isetan Shinjuku",
        note: "週末原宿人多，先去明治神宮，再視體力決定 Cat Street 或直接表參道咖啡。"
      },
      ginza: {
        label: "銀座東京站",
        day: "Day 7",
        icon: "diamond",
        title: "Day 7｜銀座 → 有樂町 → 東京站一番街",
        desc: "雨天購物強線。百貨、地下街、角色街和拉麵街容易連接，不怕天氣差。",
        origin: "Ginza Six Tokyo",
        destination: "Tokyo Character Street",
        stops: ["GINZA SIX Tokyo", "Ginza Mitsukoshi", "MUJI Ginza", "Yurakucho Station Tokyo", "Tokyo Character Street"],
        query: "GINZA SIX Ginza Mitsukoshi MUJI Ginza Tokyo Character Street",
        note: "大雨時優先走地下街和百貨連接，東京站一番街可留到傍晚避開戶外。"
      },
      nihonbashi: {
        label: "日本橋手信",
        day: "Day 15",
        icon: "redeem",
        title: "Day 15｜日本橋 → 東京站手信收尾",
        desc: "最後一天低風險收尾：買手信、退稅、回酒店執行李，不再跨太遠。",
        origin: "Hotel Horidome Villa Tokyo",
        destination: "Daimaru Tokyo",
        stops: ["Hotel Horidome Villa Tokyo", "Coredo Muromachi Tokyo", "Nihombashi Mitsukoshi Main Store", "Tokyo Character Street", "Daimaru Tokyo"],
        query: "Hotel Horidome Villa Coredo Muromachi Nihombashi Mitsukoshi Tokyo Character Street Daimaru Tokyo",
        note: "買完重物先回酒店放低，再補最後缺口；這天以行李重量和回程準備為優先。"
      },
      odaiba: {
        label: "台場候補",
        day: "Day 14",
        icon: "water",
        title: "好天候補｜台場海景與 DiverCity",
        desc: "如果 Day 14 天氣很好、購物已完成，可以改成海濱散步、高達與彩虹大橋夜景。",
        origin: "Hotel Horidome Villa Tokyo",
        destination: "DiverCity Tokyo Plaza",
        stops: ["Odaiba Marine Park Tokyo", "DiverCity Tokyo Plaza", "Unicorn Gundam Statue Odaiba", "Rainbow Bridge Tokyo"],
        query: "Odaiba Marine Park DiverCity Tokyo Plaza Unicorn Gundam Rainbow Bridge",
        note: "台場不適合強風雨硬去；若下雨，留在新宿或銀座百貨會舒服很多。"
      }
    };

    function basePill(base) {
      if (base === "秋葉原") return '<span class="lodging-pill lodging-akiba">秋葉原</span>';
      if (base === "日本橋") return '<span class="lodging-pill lodging-nihonbashi">日本橋</span>';
      return '<span style="color:#94a3b8">—</span>';
    }

    function renderTable(data = itinerary) {
      const body = document.getElementById("master-table-body");
      body.innerHTML = data.map(item => `
        <tr class="${item.row || ""}" data-day="${item.day}" tabindex="0" role="button" aria-label="打開 Day ${item.day} 詳細行程">
          <td class="day-cell" data-label="日期 / Day">${item.date}<span>Day ${item.day}</span><em class="table-jump"><span class="material-symbols-outlined" style="font-size:14px">touch_app</span> 點擊看詳情</em></td>
          <td class="plan-cell" data-label="主行程">${item.day === 5 ? '<span class="badge badge-coral" style="margin-right:8px">DisneySea</span>' : ""}${item.plan}</td>
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
      if (/Fixed|Return|High/.test(label)) return "status-fixed";
      if (/Booked|Arrival/.test(label)) return "status-booked";
      if (/Need|Weather|Buffer|Rain/.test(label)) return "status-check";
      return "status-flex";
    }

    function renderTodayDayGrid(activeDay) {
      const grid = document.getElementById("today-day-grid");
      if (!grid) return;
      grid.innerHTML = details.map(item => `
        <button class="today-day-btn ${item.day === activeDay ? "active" : ""}" type="button" data-today-day="${item.day}">Day ${item.day}</button>
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

      document.getElementById("today-mode-title").textContent = `Today：Day ${activeDay} — ${detail.title.replace(/^.*?｜\s*/, "")}`;
      document.getElementById("today-mode-subtitle").textContent = `${itineraryItem?.date || ""} ｜ ${detail.type} ｜ ${detail.pace}`;
      document.getElementById("today-leave-time").textContent = meta.leave || detail.timeline?.[0] || "--";
      document.getElementById("today-target-time").textContent = meta.target || shortcut.destination;
      document.getElementById("today-base").textContent = itineraryItem?.base || "--";
      document.getElementById("today-focus").textContent = detail.focus;
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
    }

    function renderDetails() {
      const box = document.getElementById("daily-accordion");
      box.innerHTML = details.map(item => `
        <details class="day-card" id="day-${item.day}" ${item.open ? "open" : ""}>
          <summary>
            <div class="summary-left">
              <span class="day-badge">Day ${item.day}</span>
              <span class="day-visual" style="--image:url('${item.image || ""}')"></span>
              <span class="summary-copy">
                <span class="summary-title">${item.title}</span>
                <span class="day-meta">
                  <span class="meta-pill mood-${item.mood || "city"}">${item.type || "行程"}</span>
                  <span class="meta-pill mood-buffer">${item.pace || "彈性"}</span>
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
      badge.textContent = missing.length ? `欠 Day ${missing.join(", ")}` : "Day 1-16 全齊";
      grid.innerHTML = details.map(item => `<button class="day-index-btn" type="button" data-jump-day="${item.day}">Day ${item.day}</button>`).join("");
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
        <div class="day-section-tabs" aria-label="Day ${item.day} 詳情分頁">
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
              <span class="daily-note">價格會因日期、匯率、排隊/購物選擇改變；出發前以官方與 Google Maps 當日顯示為準。</span>
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
          <span class="day-command-badge">目前選擇 Day ${item.day}</span>
        </div>
        <div class="day-command-actions">
          <a class="day-command-link primary" href="${buildDayDirectionsUrl(shortcut)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">directions</span> 最快交通</a>
          <a class="day-command-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shortcut.destination)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">pin_drop</span> 目的地</a>
          <a class="day-command-link" href="${buildDayFoodUrl(shortcut)}" target="_blank" rel="noopener"><span class="material-symbols-outlined">restaurant</span> 食物</a>
          <button class="day-command-action" type="button" data-command-day="${item.day}" data-command-section="budget"><span class="material-symbols-outlined">payments</span> 預算</button>
        </div>
        <div class="day-command-sections" aria-label="Day ${item.day} 內容快速跳轉">
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
          <div class="map-stop"><b>${index + 1}</b><span>${stop}</span></div>
        `).join("");
      }
      document.querySelectorAll(".map-route-btn[data-map-route]").forEach(button => {
        button.classList.toggle("active", button.dataset.mapRoute === routeKey);
      });
      setDockActive(dockKeyForTarget("shopping-map", routeKey));
    }

    function dockKeyForTarget(tabId, mapRoute = "") {
      if (tabId === "today-mode") return "today";
      if (tabId === "weather-strategy") return "weather";
      if (tabId === "return-help") return "return";
      if (tabId === "shopping-map") return mapRoute.includes("hotel") ? "hotel" : "map";
      return "";
    }

    function setDockActive(key) {
      document.querySelectorAll(".dock-btn").forEach(button => {
        const isActive = Boolean(key) && button.dataset.dockKey === key;
        button.classList.remove("active");
        button.classList.toggle("is-active", isActive);
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
      const dockKey = dockKeyForTarget(tab, mapRoute);
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
        row.querySelector(".plan-cell").textContent = updates[day][0];
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
          items.push(`Day ${day}：${activity.short} ｜ ${weatherStateLabels[state]}`);
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
        if (state === "heavy") warnings.push(`Day ${day} 大雨/雷雨：優先留在室內或縮短跨區移動。`);
        if (state === "wind") warnings.push(`Day ${day} 強風：鎌倉、台場、展望台類活動要保守處理。`);
      });
      result.innerHTML = `
        <strong>智能建議：按目前輸入天氣重排 Day 11-14</strong>
        <ul>
          ${latestSmartWeatherPlan.items.map(item => `<li>${item}</li>`).join("")}
          ${warnings.map(item => `<li>${item}</li>`).join("")}
        </ul>
      `;
    }

    function applySmartWeatherPlan() {
      if (!latestSmartWeatherPlan) renderSmartWeatherPlan();
      if (!latestSmartWeatherPlan) return;
      applyPlanUpdates(latestSmartWeatherPlan.updates);
      document.querySelectorAll(".weather-btn").forEach(btn => btn.classList.remove("active"));
      document.getElementById("current-plan-title").textContent = "Smart Weather ｜ 已按即時天氣套用到總表預覽";
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

    function registerServiceWorker() {
      if (!("serviceWorker" in navigator)) return;
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
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

    renderTable();
    renderDetails();
    renderDayIndex();
    initializeCompactDailyView(1);
    renderTodayMode();
    hydrateSavedChecks();
    renderMapRoutes();
    simulateWeather("A");
    registerServiceWorker();
    switchTab(location.hash.replace("#", "") || "today-mode", false);
    if (location.hash) {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        setTimeout(() => window.scrollTo(0, 0), 80);
      });
    }
