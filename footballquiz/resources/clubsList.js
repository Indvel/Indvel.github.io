const countryData = [{"name":"요르단","logos":"https://flagcdn.com/jo.svg"},{"name":"북마리아나 제도","logos":"https://flagcdn.com/mp.svg"},{"name":"세르비아","logos":"https://flagcdn.com/rs.svg"},{"name":"안도라","logos":"https://flagcdn.com/ad.svg"},{"name":"터크스 케이커스 제도","logos":"https://flagcdn.com/tc.svg"},{"name":"버뮤다","logos":"https://flagcdn.com/bm.svg"},{"name":"남극","logos":"https://flagcdn.com/aq.svg"},{"name":"볼리비아","logos":"https://flagcdn.com/bo.svg"},{"name":"리비아","logos":"https://flagcdn.com/ly.svg"},{"name":"말리","logos":"https://flagcdn.com/ml.svg"},{"name":"아르메니아","logos":"https://flagcdn.com/am.svg"},{"name":"모리셔스","logos":"https://flagcdn.com/mu.svg"},{"name":"몰디브","logos":"https://flagcdn.com/mv.svg"},{"name":"아메리칸사모아","logos":"https://flagcdn.com/as.svg"},{"name":"북마케도니아","logos":"https://flagcdn.com/mk.svg"},{"name":"에티오피아","logos":"https://flagcdn.com/et.svg"},{"name":"그린란드","logos":"https://flagcdn.com/gl.svg"},{"name":"이라크","logos":"https://flagcdn.com/iq.svg"},{"name":"과테말라","logos":"https://flagcdn.com/gt.svg"},{"name":"트리니다드 토바고","logos":"https://flagcdn.com/tt.svg"},{"name":"페루","logos":"https://flagcdn.com/pe.svg"},{"name":"수리남","logos":"https://flagcdn.com/sr.svg"},{"name":"스웨덴","logos":"https://flagcdn.com/se.svg"},{"name":"누벨칼레도니","logos":"https://flagcdn.com/nc.svg"},{"name":"프랑스령 폴리네시아","logos":"https://flagcdn.com/pf.svg"},{"name":"베냉","logos":"https://flagcdn.com/bj.svg"},{"name":"에스토니아","logos":"https://flagcdn.com/ee.svg"},{"name":"포클랜드 제도","logos":"https://flagcdn.com/fk.svg"},{"name":"괌","logos":"https://flagcdn.com/gu.svg"},{"name":"짐바브웨","logos":"https://flagcdn.com/zw.svg"},{"name":"슬로바키아","logos":"https://flagcdn.com/sk.svg"},{"name":"네덜란드","logos":"https://flagcdn.com/nl.svg"},{"name":"에콰도르","logos":"https://flagcdn.com/ec.svg"},{"name":"사우디아라비아","logos":"https://flagcdn.com/sa.svg"},{"name":"아랍에미리트","logos":"https://flagcdn.com/ae.svg"},{"name":"아프가니스탄","logos":"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"},{"name":"미국령 군소 제도","logos":"https://flagcdn.com/um.svg"},{"name":"중앙아프리카 공화국","logos":"https://flagcdn.com/cf.svg"},{"name":"파나마","logos":"https://flagcdn.com/pa.svg"},{"name":"바티칸","logos":"https://flagcdn.com/va.svg"},{"name":"시리아","logos":"https://flagcdn.com/sy.svg"},{"name":"바누아투","logos":"https://flagcdn.com/vu.svg"},{"name":"온두라스","logos":"https://flagcdn.com/hn.svg"},{"name":"키리바시","logos":"https://flagcdn.com/ki.svg"},{"name":"칠레","logos":"https://flagcdn.com/cl.svg"},{"name":"부르키나파소","logos":"https://flagcdn.com/bf.svg"},{"name":"세인트키츠 네비스","logos":"https://flagcdn.com/kn.svg"},{"name":"생바르텔레미","logos":"https://flagcdn.com/bl.svg"},{"name":"멕시코","logos":"https://flagcdn.com/mx.svg"},{"name":"중국","logos":"https://flagcdn.com/cn.svg"},{"name":"동티모르","logos":"https://flagcdn.com/tl.svg"},{"name":"인도","logos":"https://flagcdn.com/io.svg"},{"name":"남수단","logos":"https://flagcdn.com/ss.svg"},{"name":"에스와티니","logos":"https://flagcdn.com/sz.svg"},{"name":"우즈베키스탄","logos":"https://flagcdn.com/uz.svg"},{"name":"인도네시아","logos":"https://flagcdn.com/id.svg"},{"name":"파라과이","logos":"https://flagcdn.com/py.svg"},{"name":"모나코","logos":"https://flagcdn.com/mc.svg"},{"name":"그레나다","logos":"https://flagcdn.com/gd.svg"},{"name":"크로아티아","logos":"https://flagcdn.com/hr.svg"},{"name":"폴란드","logos":"https://flagcdn.com/pl.svg"},{"name":"보스니아 헤르체고비나","logos":"https://flagcdn.com/ba.svg"},{"name":"캐나다","logos":"https://flagcdn.com/ca.svg"},{"name":"포르투갈","logos":"https://flagcdn.com/pt.svg"},{"name":"브라질","logos":"https://flagcdn.com/br.svg"},{"name":"모리타니","logos":"https://flagcdn.com/mr.svg"},{"name":"이스라엘","logos":"https://flagcdn.com/il.svg"},{"name":"퀴라소","logos":"https://flagcdn.com/cw.svg"},{"name":"브루나이","logos":"https://flagcdn.com/bn.svg"},{"name":"앙골라","logos":"https://flagcdn.com/ao.svg"},{"name":"몰타","logos":"https://flagcdn.com/mt.svg"},{"name":"벨라루스","logos":"https://flagcdn.com/by.svg"},{"name":"튀르키예","logos":"https://flagcdn.com/tr.svg"},{"name":"핀란드","logos":"https://flagcdn.com/fi.svg"},{"name":"지브롤터","logos":"https://flagcdn.com/gi.svg"},{"name":"부탄","logos":"https://flagcdn.com/bt.svg"},{"name":"스페인","logos":"https://flagcdn.com/es.svg"},{"name":"베네수엘라","logos":"https://flagcdn.com/ve.svg"},{"name":"카타르","logos":"https://flagcdn.com/qa.svg"},{"name":"체코","logos":"https://flagcdn.com/cz.svg"},{"name":"쿠웨이트","logos":"https://flagcdn.com/kw.svg"},{"name":"몬테네그로","logos":"https://flagcdn.com/me.svg"},{"name":"부베 섬","logos":"https://flagcdn.com/bv.svg"},{"name":"인도","logos":"https://flagcdn.com/in.svg"},{"name":"뉴질랜드","logos":"https://flagcdn.com/nz.svg"},{"name":"자메이카","logos":"https://flagcdn.com/jm.svg"},{"name":"케이맨 제도","logos":"https://flagcdn.com/ky.svg"},{"name":"산마리노","logos":"https://flagcdn.com/sm.svg"},{"name":"콩고","logos":"https://flagcdn.com/cg.svg"},{"name":"파키스탄","logos":"https://flagcdn.com/pk.svg"},{"name":"프랑스","logos":"https://flagcdn.com/fr.svg"},{"name":"카자흐스탄","logos":"https://flagcdn.com/kz.svg"},{"name":"바레인","logos":"https://flagcdn.com/bh.svg"},{"name":"피지","logos":"https://flagcdn.com/fj.svg"},{"name":"아이슬란드","logos":"https://flagcdn.com/is.svg"},{"name":"미얀마","logos":"https://flagcdn.com/mm.svg"},{"name":"방글라데시","logos":"https://flagcdn.com/bd.svg"},{"name":"필리핀","logos":"https://flagcdn.com/ph.svg"},{"name":"적도 기니","logos":"https://flagcdn.com/gq.svg"},{"name":"아일랜드","logos":"https://flagcdn.com/ie.svg"},{"name":"네팔","logos":"https://flagcdn.com/np.svg"},{"name":"예멘","logos":"https://flagcdn.com/ye.svg"},{"name":"대한민국","logos":"https://flagcdn.com/kr.svg"},{"name":"덴마크","logos":"https://flagcdn.com/dk.svg"},{"name":"오만","logos":"https://flagcdn.com/om.svg"},{"name":"세인트빈센트 그레나딘","logos":"https://flagcdn.com/vc.svg"},{"name":"에리트레아","logos":"https://flagcdn.com/er.svg"},{"name":"호주","logos":"https://flagcdn.com/au.svg"},{"name":"이란","logos":"https://flagcdn.com/ir.svg"},{"name":"엘살바도르","logos":"https://flagcdn.com/sv.svg"},{"name":"탄자니아","logos":"https://flagcdn.com/tz.svg"},{"name":"과들루프","logos":"https://flagcdn.com/gp.svg"},{"name":"솔로몬 제도","logos":"https://flagcdn.com/sb.svg"},{"name":"케냐","logos":"https://flagcdn.com/ke.svg"},{"name":"도미니카 공화국","logos":"https://flagcdn.com/do.svg"},{"name":"그리스","logos":"https://flagcdn.com/gr.svg"},{"name":"건지 섬","logos":"https://flagcdn.com/gg.svg"},{"name":"르완다","logos":"https://flagcdn.com/rw.svg"},{"name":"생피에르 미클롱","logos":"https://flagcdn.com/pm.svg"},{"name":"투발루","logos":"https://flagcdn.com/tv.svg"},{"name":"대만","logos":"https://flagcdn.com/tw.svg"},{"name":"가이아나","logos":"https://flagcdn.com/gy.svg"},{"name":"세이셸","logos":"https://flagcdn.com/sc.svg"},{"name":"북한","logos":"https://flagcdn.com/kp.svg"},{"name":"보츠와나","logos":"https://flagcdn.com/bw.svg"},{"name":"캄보디아","logos":"https://flagcdn.com/kh.svg"},{"name":"바베이도스","logos":"https://flagcdn.com/bb.svg"},{"name":"콜롬비아","logos":"https://flagcdn.com/co.svg"},{"name":"우크라이나","logos":"https://flagcdn.com/ua.svg"},{"name":"코트디부아르","logos":"https://flagcdn.com/ci.svg"},{"name":"나우루","logos":"https://flagcdn.com/nr.svg"},{"name":"나미비아","logos":"https://flagcdn.com/na.svg"},{"name":"차드","logos":"https://flagcdn.com/td.svg"},{"name":"통가","logos":"https://flagcdn.com/to.svg"},{"name":"아르헨티나","logos":"https://flagcdn.com/ar.svg"},{"name":"크리스마스 섬","logos":"https://flagcdn.com/cx.svg"},{"name":"니제르","logos":"https://flagcdn.com/ne.svg"},{"name":"마셜 제도","logos":"https://flagcdn.com/mh.svg"},{"name":"코스타리카","logos":"https://flagcdn.com/cr.svg"},{"name":"가나","logos":"https://flagcdn.com/gh.svg"},{"name":"오스트리아","logos":"https://flagcdn.com/at.svg"},{"name":"세인트헬레나","logos":"https://flagcdn.com/sh.svg"},{"name":"팔레스타인","logos":"https://flagcdn.com/ps.svg"},{"name":"쿠바","logos":"https://flagcdn.com/cu.svg"},{"name":"헝가리","logos":"https://flagcdn.com/hu.svg"},{"name":"미크로네시아","logos":"https://flagcdn.com/fm.svg"},{"name":"벨리즈","logos":"https://flagcdn.com/bz.svg"},{"name":"바하마","logos":"https://flagcdn.com/bs.svg"},{"name":"아루바","logos":"https://flagcdn.com/aw.svg"},{"name":"상투메 프린시페","logos":"https://flagcdn.com/st.svg"},{"name":"러시아","logos":"https://flagcdn.com/ru.svg"},{"name":"룩셈부르크","logos":"https://flagcdn.com/lu.svg"},{"name":"페로 제도","logos":"https://flagcdn.com/fo.svg"},{"name":"니카라과","logos":"https://flagcdn.com/ni.svg"},{"name":"튀니지","logos":"https://flagcdn.com/tn.svg"},{"name":"콩고 민주 공화국","logos":"https://flagcdn.com/cd.svg"},{"name":"스발바르 얀마옌 제도","logos":"https://flagcdn.com/sj.svg"},{"name":"남아프리카","logos":"https://flagcdn.com/za.svg"},{"name":"시에라리온","logos":"https://flagcdn.com/sl.svg"},{"name":"레소토","logos":"https://flagcdn.com/ls.svg"},{"name":"조지아","logos":"https://flagcdn.com/ge.svg"},{"name":"이탈리아","logos":"https://flagcdn.com/it.svg"},{"name":"지부티","logos":"https://flagcdn.com/dj.svg"},{"name":"허드 맥도널드 제도","logos":"https://flagcdn.com/hm.svg"},{"name":"스리랑카","logos":"https://flagcdn.com/lk.svg"},{"name":"세인트루시아","logos":"https://flagcdn.com/lc.svg"},{"name":"사모아","logos":"https://flagcdn.com/ws.svg"},{"name":"코코스 제도","logos":"https://flagcdn.com/cc.svg"},{"name":"푸에르토리코","logos":"https://flagcdn.com/pr.svg"},{"name":"가봉","logos":"https://flagcdn.com/ga.svg"},{"name":"투르크메니스탄","logos":"https://flagcdn.com/tm.svg"},{"name":"라트비아","logos":"https://flagcdn.com/lv.svg"},{"name":"세네갈","logos":"https://flagcdn.com/sn.svg"},{"name":"벨기에","logos":"https://flagcdn.com/be.svg"},{"name":"몰도바","logos":"https://flagcdn.com/md.svg"},{"name":"리히텐슈타인","logos":"https://flagcdn.com/li.svg"},{"name":"말라위","logos":"https://flagcdn.com/mw.svg"},{"name":"레바논","logos":"https://flagcdn.com/lb.svg"},{"name":"몽골국","logos":"https://flagcdn.com/mn.svg"},{"name":"노르웨이","logos":"https://flagcdn.com/no.svg"},{"name":"영국령 버진아일랜드","logos":"https://flagcdn.com/vg.svg"},{"name":"카메룬","logos":"https://flagcdn.com/cm.svg"},{"name":"태국","logos":"https://flagcdn.com/th.svg"},{"name":"나이지리아","logos":"https://flagcdn.com/ng.svg"},{"name":"레위니옹","logos":"https://flagcdn.com/re.svg"},{"name":"카보베르데","logos":"https://flagcdn.com/cv.svg"},{"name":"저지 섬","logos":"https://flagcdn.com/je.svg"},{"name":"알제리","logos":"https://flagcdn.com/dz.svg"},{"name":"라오스","logos":"https://flagcdn.com/la.svg"},{"name":"카리브 네덜란드","logos":"https://flagcdn.com/bq.svg"},{"name":"아제르바이잔","logos":"https://flagcdn.com/az.svg"},{"name":"신트마르턴","logos":"https://flagcdn.com/sx.svg"},{"name":"모로코","logos":"https://flagcdn.com/ma.svg"},{"name":"올란드 제도","logos":"https://flagcdn.com/ax.svg"},{"name":"불가리아","logos":"https://flagcdn.com/bg.svg"},{"name":"부룬디","logos":"https://flagcdn.com/bi.svg"},{"name":"우간다","logos":"https://flagcdn.com/ug.svg"},{"name":"코소보","logos":"https://flagcdn.com/xk.svg"},{"name":"모잠비크","logos":"https://flagcdn.com/mz.svg"},{"name":"조지아","logos":"https://flagcdn.com/ge.svg"},{"name":"영국","logos":"https://flagcdn.com/gb.svg"},{"name":"왈리스 퓌튀나","logos":"https://flagcdn.com/wf.svg"},{"name":"핏케언 제도","logos":"https://flagcdn.com/pn.svg"},{"name":"루마니아","logos":"https://flagcdn.com/ro.svg"},{"name":"베트남","logos":"https://flagcdn.com/vn.svg"},{"name":"프랑스령 남부와 남극 지역","logos":"https://flagcdn.com/tf.svg"},{"name":"서사하라","logos":"https://flagcdn.com/eh.svg"},{"name":"일본","logos":"https://flagcdn.com/jp.svg"},{"name":"이집트","logos":"https://flagcdn.com/eg.svg"},{"name":"라이베리아","logos":"https://flagcdn.com/lr.svg"},{"name":"리투아니아","logos":"https://flagcdn.com/lt.svg"},{"name":"아이티","logos":"https://flagcdn.com/ht.svg"},{"name":"미국령 버진아일랜드","logos":"https://flagcdn.com/vi.svg"},{"name":"파푸아뉴기니","logos":"https://flagcdn.com/pg.svg"},{"name":"홍콩","logos":"https://flagcdn.com/hk.svg"},{"name":"키르기스스탄","logos":"https://flagcdn.com/kg.svg"},{"name":"팔라우","logos":"https://flagcdn.com/pw.svg"},{"name":"마다가스카르","logos":"https://flagcdn.com/mg.svg"},{"name":"감비아","logos":"https://flagcdn.com/gm.svg"},{"name":"토고","logos":"https://flagcdn.com/tg.svg"},{"name":"토켈라우","logos":"https://flagcdn.com/tk.svg"},{"name":"슬로베니아","logos":"https://flagcdn.com/si.svg"},{"name":"싱가포르","logos":"https://flagcdn.com/sg.svg"},{"name":"프랑스령 기아나","logos":"https://flagcdn.com/gf.svg"},{"name":"미국","logos":"https://flagcdn.com/us.svg"},{"name":"몬트세랫","logos":"https://flagcdn.com/ms.svg"},{"name":"말레이시아","logos":"https://flagcdn.com/my.svg"},{"name":"독일","logos":"https://flagcdn.com/de.svg"},{"name":"앤티가 바부다","logos":"https://flagcdn.com/ag.svg"},{"name":"생마르탱","logos":"https://flagcdn.com/mf.svg"},{"name":"소말리아","logos":"https://flagcdn.com/so.svg"},{"name":"마카오","logos":"https://flagcdn.com/mo.svg"},{"name":"알바니아","logos":"https://flagcdn.com/al.svg"},{"name":"마요트","logos":"https://flagcdn.com/yt.svg"},{"name":"도미니카 공화국","logos":"https://flagcdn.com/dm.svg"},{"name":"잠비아","logos":"https://flagcdn.com/zm.svg"},{"name":"앵귈라","logos":"https://flagcdn.com/ai.svg"},{"name":"쿡 제도","logos":"https://flagcdn.com/ck.svg"},{"name":"마르티니크","logos":"https://flagcdn.com/mq.svg"},{"name":"기니","logos":"https://flagcdn.com/gn.svg"},{"name":"코모로","logos":"https://flagcdn.com/km.svg"},{"name":"니우에","logos":"https://flagcdn.com/nu.svg"},{"name":"스위스","logos":"https://flagcdn.com/ch.svg"},{"name":"노퍽 섬","logos":"https://flagcdn.com/nf.svg"},{"name":"맨섬","logos":"https://flagcdn.com/im.svg"},{"name":"수단","logos":"https://flagcdn.com/sd.svg"},{"name":"타지키스탄","logos":"https://flagcdn.com/tj.svg"},{"name":"우루과이","logos":"https://flagcdn.com/uy.svg"},{"name":"키프로스","logos":"https://flagcdn.com/cy.svg"},{"name":"기니비사우","logos":"https://flagcdn.com/gw.svg"},{"name":"잉글랜드","logos":"./resources/logos/OtherFlags/Flag_of_England.svg"},{"name":"스코틀랜드","logos":"./resources/logos/OtherFlags/Flag_of_Scotland.svg"},{"name":"웨일스","logos":"./resources/logos/OtherFlags/Flag_of_Wales.svg"},{"name":"북아일랜드","logos":"./resources/logos/OtherFlags/Flag_of_NorthernIreland.svg"}];
const ClubsData = [
	{"name": "강원 FC", "logos": "./resources/logos/KLeague/Gangwon_FC.svg"},
	{"name": "광주 FC", "logos": "./resources/logos/KLeague/Gwangju_FC.svg"},
	{"name": "대구 FC", "logos": "./resources/logos/KLeague/Daegu_FC.svg"},
	{"name": "대전 하나 시티즌", "logos": "./resources/logos/KLeague/Daejeon_Hana_Citizen.svg"},
	{"name": "FC 서울", "logos": "./resources/logos/KLeague/FC_Seoul_logo.svg"},
	{"name": "수원 삼성 블루윙즈", "logos": "./resources/logos/KLeague/Suwon_Samsung_Bluewings.svg"},
	{"name": "수원 FC", "logos": "./resources/logos/KLeague/Suwon_FC.svg"},
	{"name": "울산 현대", "logos": "./resources/logos/KLeague/Ulsan_Hyundai_FC.svg"},
	{"name": "인천 유나이티드 FC", "logos": "./resources/logos/KLeague/Incheon_United_FC.svg"},
	{"name": "전북 현대 모터스", "logos": "./resources/logos/KLeague/Jeonbuk_Hyundai_Motors.svg"},
	{"name": "제주 유나이티드 FC", "logos": "./resources/logos/KLeague/Jeju_United_FC.svg"},
	{"name": "포항 스틸러스", "logos": "./resources/logos/KLeague/Pohang_Steelers.svg"},
	{"name": "노팅엄 포레스트 FC|노팅엄 포리스트", "logos": "./resources/logos/EPL/Nottingham_Forest_F.C._logo.svg"},
	{"name": "뉴캐슬 유나이티드 FC", "logos": "./resources/logos/EPL/Newcastle_United_Logo.svg"},
	{"name": "루턴 타운 FC", "logos": "./resources/logos/EPL/Luton_Town_FC.svg"},
	{"name": "리버풀 FC", "logos": "./resources/logos/EPL/Liverpool_FC.svg"},
	{"name": "맨체스터 시티 FC", "logos": "./resources/logos/EPL/Manchester_City_FC.svg"},
	{"name": "맨체스터 유나이티드 FC", "logos": "./resources/logos/EPL/Manchester_United_FC.svg"},
	{"name": "번리 FC", "logos": "./resources/logos/EPL/Burnley_FC_Logo.svg"},
	{"name": "AFC 본머스", "logos": "./resources/logos/EPL/AFC_Bournemouth.svg"},
	{"name": "브라이튼 앤 호브 알비온 FC|브라이턴", "logos": "./resources/logos/EPL/Brighton_And_Hove_Albion_logo.svg"},
	{"name": "브렌트포드 FC", "logos": "./resources/logos/EPL/Brentford_FC.svg"},
	{"name": "셰필드 유나이티드 FC", "logos": "./resources/logos/EPL/Sheffield_United_FC_logo.svg"},
	{"name": "아스날 FC|아스널", "logos": "./resources/logos/EPL/Arsenal_FC.svg"},
	{"name": "아스톤 빌라 FC|애스턴 빌라", "logos": "./resources/logos/EPL/Aston_Villa_FC.svg"},
	{"name": "에버튼 FC|에버턴 FC", "logos": "./resources/logos/EPL/Everton_FC_logo.svg"},
	{"name": "울버햄튼 원더러스|울버햄프턴 원더러스", "logos": "./resources/logos/EPL/Wolverhampton_Wanderers.svg"},
	{"name": "웨스트햄 유나이티드 FC", "logos": "./resources/logos/EPL/West_Ham_United_FC_logo.svg"},
	{"name": "첼시 FC", "logos": "./resources/logos/EPL/Chelsea_FC.svg"},
	{"name": "토트넘 홋스퍼 FC", "logos": "./resources/logos/EPL/Tottenham_Hotspur.svg"},
	{"name": "크리스탈 팰리스 FC|크리스털 팰리스", "logos": "./resources/logos/EPL/Crystal_Palace_FC_logo.svg"},
	{"name": "풀럼 FC", "logos": "./resources/logos/EPL/Fulham_FC.svg"},
	{"name": "SV 다름슈타트 98", "logos": "./resources/logos/Bundesliga/SV_Darmstadt_98_Logo.svg"},
	{"name": "보루시아 도르트문트", "logos": "./resources/logos/Bundesliga/Borussia_Dortmund.svg"},
	{"name": "RB 라이프치히", "logos": "./resources/logos/Bundesliga/RB_Leipzig_logo.svg"},
	{"name": "바이어 04 레버쿠젠|바이엘 04 레버쿠젠", "logos": "./resources/logos/Bundesliga/Bayer_04_Leverkusen.svg"},
	{"name": "1. FSV 마인츠 05", "logos": "./resources/logos/Bundesliga/1._FSV_Mainz_05.svg"},
	{"name": "보루시아 묀헨글라트바흐", "logos": "./resources/logos/Bundesliga/Borussia_Monchengladbach.svg"},
	{"name": "FC 바이에른 뮌헨", "logos": "./resources/logos/Bundesliga/FC_Bayern_Munchen_logo.svg"},
	{"name": "SV 베르더 브레멘", "logos": "./resources/logos/Bundesliga/SV_Werder_Bremen.svg"},
	{"name": "Vfl 보훔", "logos": "./resources/logos/Bundesliga/VFL_Bochum.svg"},
	{"name": "Vfl 볼프스부르크", "logos": "./resources/logos/Bundesliga/Vfl_Wolfsburg.svg"},
	{"name": "VfB 슈투트가르트", "logos": "./resources/logos/Bundesliga/VfB_Stuttgart.svg"},
	{"name": "FC 아우쿠스 부르크", "logos": "./resources/logos/Bundesliga/FC_Augsburg.svg"},
	{"name": "1. FC 우니온 베를린", "logos": "./resources/logos/Bundesliga/1._FC_Union_Berlin.svg"},
	{"name": "1. FC 쾰른", "logos": "./resources/logos/Bundesliga/1._FC_Koln.svg"},
	{"name": "SC 프라이부르크", "logos": "./resources/logos/Bundesliga/SC_Freiburg.svg"},
	{"name": "아인트라흐트 프랑크푸르트", "logos": "./resources/logos/Bundesliga/Eintracht_Frankfurt.svg"},
	{"name": "1. FC 하이덴하임", "logos": "./resources/logos/Bundesliga/1._FC_Heidenheim.svg"},
	{"name": "TSG 1899 호펜하임", "logos": "./resources/logos/Bundesliga/TSG_1899_Hoffenheim.svg"},
	{"name": "그라나다 CF", "logos": "./resources/logos/Laliga/Granada_CF.svg"},
	{"name": "UD 라스팔마스", "logos": "./resources/logos/Laliga/UD_Las_Palmas.svg"},
	{"name": "라요 바예카노", "logos": "./resources/logos/Laliga/Rayo_Vallecano.svg"},
	{"name": "레알 마드리드 CF", "logos": "./resources/logos/Laliga/Real_Madrid_CF.svg"},
	{"name": "RCD 마요르카", "logos": "./resources/logos/Laliga/RCD_Mallorca.svg"},
	{"name": "FC 바르셀로나", "logos": "./resources/logos/Laliga/FC_Barcelona.svg"},
	{"name": "발렌시아 CF", "logos": "./resources/logos/Laliga/Valencia_CF.svg"},
	{"name": "레알 베티스 발롬피에|레알 베티스", "logos": "./resources/logos/Laliga/Real_Betis_Balompie.svg"},
	{"name": "비야레알 CF", "logos": "./resources/logos/Laliga/Villarreal_CF.svg"},
	{"name": "세비야 FC", "logos": "./resources/logos/Laliga/Sevilla_FC.svg"},
	{"name": "RC 셀타 데 비고", "logos": "./resources/logos/Laliga/RC_Celta_de_Vigo.svg"},
	{"name": "레알 소시에다드", "logos": "./resources/logos/Laliga/Real_Sociedad.svg"},
	{"name": "아틀레티코 마드리드", "logos": "./resources/logos/Laliga/Atletico_de_Madrid.svg"},
	{"name": "아틀레틱 클루브", "logos": "./resources/logos/Laliga/Athletic_Club.svg"},
	{"name": "데포르티보 알라베스", "logos": "./resources/logos/Laliga/Deportivo_Alaves.svg"},
	{"name": "UD 알메리아", "logos": "./resources/logos/Laliga/UD_Almeria.svg"},
	{"name": "CA 오사수나", "logos": "./resources/logos/Laliga/CA_Osasuna.svg"},
	{"name": "지로나 FC", "logos": "./resources/logos/Laliga/Girona_FC.svg"},
	{"name": "카디스 CF", "logos": "./resources/logos/Laliga/Cadiz_CF.svg"},
	{"name": "헤타페 CF", "logos": "./resources/logos/Laliga/Getafe_CF.svg"},
	{"name": "FC 낭트", "logos": "./resources/logos/Ligue1/FC_Nantes.svg"},
	{"name": "OGC 니스", "logos": "./resources/logos/Ligue1/OGC_Nice.svg"},
	{"name": "RC 랑스", "logos": "./resources/logos/Ligue1/RC_Lens.svg"},
	{"name": "FC 로리앙", "logos": "./resources/logos/Ligue1/FC_Lorient.svg"},
	{"name": "르아브르 AC", "logos": "./resources/logos/Ligue1/Le_Havre_AC.svg"},
	{"name": "올랭피크 리옹", "logos": "./resources/logos/Ligue1/Olympique_Lyonnais.svg"},
	{"name": "LOSC 릴", "logos": "./resources/logos/Ligue1/LOSC_Lille.svg"},
	{"name": "올랭피크 드 마르세유|올랭피크 마르세유", "logos": "./resources/logos/Ligue1/Olympique_de_Marseille.svg"},
	{"name": "AS 모나코 FC", "logos": "./resources/logos/Ligue1/AS_Monaco_FC.svg"},
	{"name": "몽펠리에 HSC", "logos": "./resources/logos/Ligue1/Montpellier_HSC.svg"},
	{"name": "FC 메스", "logos": "./resources/logos/Ligue1/FC_Metz.svg"},
	{"name": "스타드 브레스투아 29", "logos": "./resources/logos/Ligue1/Stade_brestois_29.svg"},
	{"name": "스타드 드 랭스|스타드 랭스", "logos": "./resources/logos/Ligue1/Stade_de_Reims.svg"},
	{"name": "스타드 렌 FC", "logos": "./resources/logos/Ligue1/Stade_Rennais_FC.svg"},
	{"name": "RC 스트라스부르 알자스", "logos": "./resources/logos/Ligue1/RC_Strasbourg_Alsace.svg"},
	{"name": "클레르몽 푸트 63", "logos": "./resources/logos/Ligue1/Clermont_Foot_63.svg"},
	{"name": "툴루즈 FC", "logos": "./resources/logos/Ligue1/Toulouse_FC.svg"},
	{"name": "파리 생제르맹 FC|PSG", "logos": "./resources/logos/Ligue1/Paris-Saint-Germain_FC.svg"},
	{"name": "SSC 나폴리|나폴리 FC", "logos": "./resources/logos/SerieA/SSC_Napoli.svg"},
	{"name": "SS 라치오", "logos": "./resources/logos/SerieA/SS_Lazio.svg"},
	{"name": "US 레체", "logos": "./resources/logos/SerieA/US_Lecce.svg"},
	{"name": "AS 로마|AS로마", "logos": "./resources/logos/SerieA/AS_Roma.svg"},
	{"name": "AC 몬차|AC몬차", "logos": "./resources/logos/SerieA/AC_Monza.svg"},
	{"name": "AC 밀란|AC밀란", "logos": "./resources/logos/SerieA/AC_Milan.svg"},
	{"name": "엘라스 베로나 FC", "logos": "./resources/logos/SerieA/Hellas_Verona_FC.svg"},
	{"name": "볼로냐 FC 1909", "logos": "./resources/logos/SerieA/Bologna_FC_1909.svg"},
	{"name": "US 사수올로 칼초", "logos": "./resources/logos/SerieA/US_Sassuolo_Calcio.svg"},
	{"name": "US 살레르니타나 1919", "logos": "./resources/logos/SerieA/US_Salernitana_1919.svg"},
	{"name": "아탈란타 BC", "logos": "./resources/logos/SerieA/Atalanta_BC.svg"},
	{"name": "엠폴리 FC", "logos": "./resources/logos/SerieA/Empoli_FC.svg"},
	{"name": "우디네세 칼초", "logos": "./resources/logos/SerieA/Udinese_Calcio.svg"},
	{"name": "유벤투스 FC", "logos": "./resources/logos/SerieA/Juventus_FC.svg"},
	{"name": "FC 인테르나치오날레 밀라노", "logos": "./resources/logos/SerieA/FC_Internazionale_Milano.svg"},
	{"name": "제노아 CFC", "logos": "./resources/logos/SerieA/Genoa_CFC.svg"},
	{"name": "칼리아리 칼초", "logos": "./resources/logos/SerieA/Cagliari_Calcio.svg"},
	{"name": "토리노 FC", "logos": "./resources/logos/SerieA/Torino_FC.svg"},
	{"name": "프로시노네 칼초", "logos": "./resources/logos/SerieA/Frosinone_Calcioo.svg"},
	{"name": "ACF 피오렌티나", "logos": "./resources/logos/SerieA/ACF_Fiorentina.svg"},
	{"name": "가시마 앤틀러스", "logos": "./resources/logos/J1League/Kashima_Antlers.svg"},
	{"name": "가시와 레이솔", "logos": "./resources/logos/J1League/Kashiwa_Reysol.svg"},
	{"name": "가와사키 프론탈레", "logos": "./resources/logos/J1League/Kawasaki_Frontale.svg"},
	{"name": "비셀 고베", "logos": "./resources/logos/J1League/Vissel_Kobe.svg"},
	{"name": "교토 상가 FC", "logos": "./resources/logos/J1League/Kyoto_Sanga_FC.svg"},
	{"name": "나고야 그램퍼스", "logos": "./resources/logos/J1League/Nagoya_Grampus.svg"},
	{"name": "알비렉스 니가타", "logos": "./resources/logos/J1League/Albirex_Niigata.svg"},
	{"name": "사간 도스", "logos": "./resources/logos/J1League/Sagan_Tosu.svg"},
	{"name": "FC 도쿄", "logos": "./resources/logos/J1League/FC_Tokyo.svg"},
	{"name": "홋카이도 콘사돌레 삿포로", "logos": "./resources/logos/J1League/Hokkaido_Consadole_Sapporo.svg"},
	{"name": "쇼난 벨마레", "logos": "./resources/logos/J1League/Shonan_Bellmare.svg"},
	{"name": "감바 오사카", "logos": "./resources/logos/J1League/Gamba_Osaka.svg"},
	{"name": "세레소 오사카", "logos": "./resources/logos/J1League/Cerezo_Osaka.svg"},
	{"name": "요코하마 FC", "logos": "./resources/logos/J1League/Yokohama_FC.svg"},
	{"name": "요코하마 F. 마리노스", "logos": "./resources/logos/J1League/Yokohama_F._Marinos.svg"},
	{"name": "우라와 레드 다이아몬즈", "logos": "./resources/logos/J1League/Urawa_Red_Diamonds.svg"},
	{"name": "아비스파 후쿠오카", "logos": "./resources/logos/J1League/Avispa_Fukuoka.svg"},
	{"name": "산브레체 히로시마", "logos": "./resources/logos/J1League/Sanfrecce_Hiroshima.svg"},
	{"name": "노리치 시티 FC", "logos": "./resources/logos/EFL/Norwich_City_FC.svg"},
	{"name": "레스터 시티 FC", "logos": "./resources/logos/EFL/Leicester_City_FC.svg"},
	{"name": "로더럼 유나이티드 FC", "logos": "./resources/logos/EFL/Rotherham_United_FC.svg"},
	{"name": "리즈 유나이티드 FC", "logos": "./resources/logos/EFL/Leeds_United_FC.svg"},
	{"name": "미들즈브러 FC", "logos": "./resources/logos/EFL/Middlesbrough_FC.svg"},
	{"name": "밀월 FC", "logos": "./resources/logos/EFL/Millwall_FC.svg"},
	{"name": "버밍엄 시티 FC", "logos": "./resources/logos/EFL/Birmingham_City_FC.svg"},
	{"name": "브리스톨 시티 FC", "logos": "./resources/logos/EFL/Bristol_City_FC.svg"},
	{"name": "블랙번 로버스 FC", "logos": "./resources/logos/EFL/Blackburn_Rovers_FC.svg"},
	{"name": "사우스햄튼 FC FC", "logos": "./resources/logos/EFL/Southampton_FC.svg"},
	{"name": "선덜랜드 AFC", "logos": "./resources/logos/EFL/Sunderland_AFC.svg"},
	{"name": "셰필드 웬즈데이 FC", "logos": "./resources/logos/EFL/Sheffield_Wednesday_FC.svg"},
	{"name": "스완지 시티 AFC", "logos": "./resources/logos/EFL/Swansea_City_FC.svg"},
	{"name": "스토크 시티 FC", "logos": "./resources/logos/EFL/Stoke_City_FC.svg"},
	{"name": "왓포드 FC", "logos": "./resources/logos/EFL/Watford_FC.svg"},
	{"name": "웨스트 브롬위치 알비온 FC", "logos": "./resources/logos/EFL/West_Bromwich_Albion_FC.svg"},
	{"name": "입스위치 타운 FC", "logos": "./resources/logos/EFL/Ipswich_Town_FC.svg"},
	{"name": "카디프 시티 FC", "logos": "./resources/logos/EFL/Cardiff_City_FC.svg"},
	{"name": "코번트리 시티 FC", "logos": "./resources/logos/EFL/Coventry_City_FC.svg"},
	{"name": "퀸즈 파크 레인저스 FC", "logos": "./resources/logos/EFL/Queens_Park_Rangers_City_FC.svg"},
	{"name": "프레스턴 노스 엔드 FC", "logos": "./resources/logos/EFL/Preston_North_End_FC.svg"},
	{"name": "플리머스 아가일 FC", "logos": "./resources/logos/EFL/Plymouth_Argyle_FC.svg"},
	{"name": "허더즈필드 타운 FC", "logos": "./resources/logos/EFL/Huddersfield_Town_FC.svg"},
	{"name": "헐 시티 AFC", "logos": "./resources/logos/EFL/Hull_City_AFC.svg"},
	{"name": "오르후스 GF", "logos": "./resources/logos/Superliga/Aarhus_GF.svg"},
	{"name": "브뢴뷔 IF", "logos": "./resources/logos/Superliga/Brondby_IF.svg"},
	{"name": "FC 코펜하겐", "logos": "./resources/logos/Superliga/FC_Kobenhavn.svg"},
	{"name": "FC 미트윌란", "logos": "./resources/logos/Superliga/FC_Midtjylland.svg"},
	{"name": "FC 노르셸란", "logos": "./resources/logos/Superliga/FC_Nordsjaelland.svg"},
	{"name": "흐비도우레 IF", "logos": "./resources/logos/Superliga/Hvidovre_IF.svg"},
	{"name": "릥뷔 BK", "logos": "./resources/logos/Superliga/Lyngby_BK.svg"},
	{"name": "오덴세 BK", "logos": "./resources/logos/Superliga/Odense_BK.svg"},
	{"name": "라네르스 FC", "logos": "./resources/logos/Superliga/Randers_FC.svg"},
	{"name": "실케보르 IF", "logos": "./resources/logos/Superliga/Silkeborg_IF.svg"},
	{"name": "바일레 BK", "logos": "./resources/logos/Superliga/Vejle_BK.svg"},
	{"name": "비보르 FF", "logos": "./resources/logos/Superliga/Viborg_FF.svg"},
	{"name": "아다나 데미르스포르", "logos": "./resources/logos/SuperLig/Adana_Demirspor.svg"},
	{"name": "알란야스포르", "logos": "./resources/logos/SuperLig/Alanyaspor.svg"},
	{"name": "안탈리아스포르", "logos": "./resources/logos/SuperLig/Antalyaspor.svg"},
	{"name": "베식타스 JK", "logos": "./resources/logos/SuperLig/Besiltas_JK.svg"},
	{"name": "차이쿠르 리제스포르", "logos": "./resources/logos/SuperLig/Caykur_Rizespor.svg"},
	{"name": "파티흐 카라귐뤼크 SK", "logos": "./resources/logos/SuperLig/Fatih_Karagumruk_SK.svg"},
	{"name": "페네르바흐체 SK", "logos": "./resources/logos/SuperLig/Fenerbahce_SK.svg"},
	{"name": "갈라타사라이 SK", "logos": "./resources/logos/SuperLig/Galatasaray_SK.svg"},
	{"name": "가지안테프 FK", "logos": "./resources/logos/SuperLig/Gaziantep_FK.svg"},
	{"name": "하타이스포르", "logos": "./resources/logos/SuperLig/Hatayspor.svg"},
	{"name": "이스탄불 바샥셰히르 FK", "logos": "./resources/logos/SuperLig/istanbul_Basakehir_FK.svg"},
	{"name": "이스탄불스포르", "logos": "./resources/logos/SuperLig/istanbulspor.svg"},
	{"name": "카슴파샤 SK", "logos": "./resources/logos/SuperLig/Kasimpasa_SK.svg"},
	{"name": "콘야스포르", "logos": "./resources/logos/SuperLig/Konyaspor.svg"},
	{"name": "카이세리스포르", "logos": "./resources/logos/SuperLig/Kayserispor.svg"},
	{"name": "MKE 앙카라귀쥐", "logos": "./resources/logos/SuperLig/MKE_Ankaragucu.svg"},
	{"name": "펜디크스포르", "logos": "./resources/logos/SuperLig/Pendikspor.svg"},
	{"name": "삼순스포르", "logos": "./resources/logos/SuperLig/Samsunspor.svg"},
	{"name": "시바스스포르", "logos": "./resources/logos/SuperLig/Sivasspor.svg"},
	{"name": "트라브존스포르", "logos": "./resources/logos/SuperLig/Trabzonspor.svg"}
];

const LeagueId = [
	{
	   "name":"잉글랜드 프리미어리그",
	   "id":"13"
	},
	{
	   "name":"라리가 EA스포츠",
	   "id":"53"
	},
	{
	   "name":"독일 분데스리가",
	   "id":"19"
	},
	{
	   "name":"이탈리아 세리에 A TIM",
	   "id":"31"
	},
	{
	   "name":"프랑스 리그 1 우버 이츠",
	   "id":"16"
	},
	{
	   "name":"대한민국 K리그 1",
	   "id":"83"
	},
	{
	   "name":"국가대표팀",
	   "id":"78"
	}
 ];
