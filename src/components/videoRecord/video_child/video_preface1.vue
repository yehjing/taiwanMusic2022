<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>傳統音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"> </p>-->

    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2022年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2022臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2022臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄53支臺灣音樂影音紀錄，其中傳統音樂篇共收錄38支影片。
    </p>
    <table rules="all" border="1" style="border: 1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td width="94">
            <p>子領域</p>
          </td>
          <td width="47">
            <p>序號</p>
          </td>
          <td width="412">
            <p>標題名稱</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>南管音樂</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>
              振聲社「振以傳聲：振聲社傳藝成果展暨臺南市南管音樂保存者蔡芬得授證典禮」
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>
              臺南市南聲社「風神月色．雅樂相逢：南聲社展演推廣音樂會暨臺南市傳統表演藝術南管音樂保存者張栢仲授證典禮」
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>合和藝苑「111年度合和藝苑孟府郎君秋祭暨整絃會奏」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>臺北市和鳴南樂社團「111年度第二期和鳴南樂社成果演出」</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>北管音樂</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>梨春園北管樂團「彰化南瑤宮笨港進香起馬戲《天官賜福》」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>淡水南北軒「淡水清水巖清水祖師聖誕遶境」出陣</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>汐止樂英社「西秦王爺聖誕排場」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>竹塹北管藝術團中元普度子弟戲</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>福佬歌謠</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>
              屏東縣滿州鄉民謠協進會「接班人好戲台－111年傳統藝術接班人駐團演出計畫」
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>
              津藝聲說唱藝術團「接班人好戲台－111年傳統藝術接班人駐團演出計畫」
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>微笑唸歌團「臺灣唸歌節」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>微笑唸歌團「邂逅南院－故宮下午茶」</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>客家音樂</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>
              「藝湛登峯－111年重要傳統藝術保存者授證典禮」鄭榮興領獎暨苗栗陳家班北管八音團演出
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>竹頭背客家八音團「美濃藝穗節－客家八音展演」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>景勝戲劇團《1895烽火安平鎮》</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>台灣客家山歌團「2022客家歌舞劇《青春．山歌對》」</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>賽夏族、阿美族、卑南族、雅美族、太魯閣族、撒奇萊雅族</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>卑南族 普悠瑪（南王）部落年祭</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>賽夏族南群 巴斯達隘paSta'ay矮靈祭</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>雅美族 「蛻變：理解及誤解的儀式」訪歐演出</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>阿美族 里漏部落窺探祭及巫師祭</p>
          </td>
        </tr>
        <tr>
          <td rowspan="5" width="94">
            <p>邵族、布農族、噶瑪蘭族、賽德克族、泰雅族、鄒族</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>泰雅族 「聽見1967－宜蘭縣大同鄉寒溪村泰雅族歌謠發表會」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>噶瑪蘭族 「噶瑪蘭重返榮耀之夜」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>噶瑪蘭族 「Hermosas!!美麗的島嶼」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>泰雅族 傳源文化藝術團《彈撥之間》</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>5</p>
          </td>
          <td width="412">
            <p>
              布農族 「2022 Malas Bunun
              說．布農語：丹大山下遷移的旋律」族語學習營
            </p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>魯凱族 達魯瑪克部落小米收穫祭暨鞦韆祭－勇士舞</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>
              排灣族
              泰武國小古謠傳唱「二峰圳百年紀念活動」〈Lulimai細雨灑落群山〉
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>
              拉阿魯哇族
              達吉亞勒青年會「府城原味衣衣情－臺灣原住民族群服飾文化特展」開幕記者會〈mitungusu跳舞〉
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>西拉雅族 吉貝耍部落Ta-ai夜祭－牽曲</p>
          </td>
        </tr>
        <tr>
          <td rowspan="5" width="94">
            <p>佛教、釋教音樂</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>慈濟「2022佛誕祈福」浴佛</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>靈鷲山「水陸法會」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>法鼓山「大悲心水陸法會」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>法鼓山「大悲心水陸法會」五大士瑜伽焰口儀式</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>5</p>
          </td>
          <td width="412">
            <p>民雄大士爺廟三朝法事科儀</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>道教、法教音樂</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>
              臺灣法教的調營犒賞：臺南和勝堂暨澎湖東甲北極殿聯合犒賞、臺南閭山協安壇季例犒賞
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>
              破獄與打城：臺北內湖善德堂壬寅年專超法會、清微法壇超拔法會、臺南市殯儀館打城濟藥功德
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>
              十月懷胎歌：新竹港北陳府一朝宿啟功德、左營柯府黃籙大齋三朝功德、臺南市殯儀館打城濟藥填庫功德
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>澎湖獻供：澎湖縣湖東聖帝廟一朝清醮</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>
