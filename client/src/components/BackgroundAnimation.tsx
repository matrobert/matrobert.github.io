export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="engraving-tree"
        viewBox="0 0 400 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="woodGrain" patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M 0 0 L 4 4 M 4 0 L 0 4" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
          </pattern>
        </defs>
        
        <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          
          {/* Main Trunk with wood grain */}
          <path d="M 100 700 Q 105 650 108 600 Q 110 550 112 500 Q 113 450 114 400 Q 115 350 116 300 Q 116 250 117 200 Q 117 150 118 100" strokeWidth="12" />
          <path d="M 120 700 Q 115 650 113 600 Q 111 550 109 500 Q 108 450 107 400 Q 106 350 105 300 Q 105 250 104 200 Q 104 150 103 100" strokeWidth="12" />
          
          {/* Wood grain texture lines */}
          <path d="M 102 680 Q 104 680 106 680" strokeWidth="0.5" opacity="0.6" />
          <path d="M 103 660 Q 105 660 107 660" strokeWidth="0.5" opacity="0.6" />
          <path d="M 102 640 Q 104 640 106 640" strokeWidth="0.5" opacity="0.6" />
          <path d="M 103 620 Q 105 620 107 620" strokeWidth="0.5" opacity="0.6" />
          <path d="M 102 600 Q 104 600 106 600" strokeWidth="0.5" opacity="0.6" />
          <path d="M 103 580 Q 105 580 107 580" strokeWidth="0.5" opacity="0.6" />
          <path d="M 104 560 Q 106 560 108 560" strokeWidth="0.5" opacity="0.6" />
          <path d="M 105 540 Q 107 540 109 540" strokeWidth="0.5" opacity="0.6" />
          <path d="M 106 520 Q 108 520 110 520" strokeWidth="0.5" opacity="0.6" />
          <path d="M 107 500 Q 109 500 111 500" strokeWidth="0.5" opacity="0.6" />
          <path d="M 108 480 Q 110 480 112 480" strokeWidth="0.5" opacity="0.6" />
          <path d="M 109 460 Q 111 460 113 460" strokeWidth="0.5" opacity="0.6" />
          <path d="M 110 440 Q 112 440 114 440" strokeWidth="0.5" opacity="0.6" />
          <path d="M 110 420 Q 112 420 114 420" strokeWidth="0.5" opacity="0.6" />
          <path d="M 111 400 Q 113 400 115 400" strokeWidth="0.5" opacity="0.6" />
          <path d="M 111 380 Q 113 380 115 380" strokeWidth="0.5" opacity="0.6" />
          <path d="M 112 360 Q 114 360 116 360" strokeWidth="0.5" opacity="0.6" />
          <path d="M 112 340 Q 114 340 116 340" strokeWidth="0.5" opacity="0.6" />
          <path d="M 113 320 Q 115 320 117 320" strokeWidth="0.5" opacity="0.6" />
          <path d="M 113 300 Q 115 300 117 300" strokeWidth="0.5" opacity="0.6" />
          <path d="M 114 280 Q 116 280 118 280" strokeWidth="0.5" opacity="0.6" />
          <path d="M 114 260 Q 116 260 118 260" strokeWidth="0.5" opacity="0.6" />
          <path d="M 115 240 Q 117 240 119 240" strokeWidth="0.5" opacity="0.6" />
          <path d="M 115 220 Q 117 220 119 220" strokeWidth="0.5" opacity="0.6" />
          <path d="M 116 200 Q 118 200 120 200" strokeWidth="0.5" opacity="0.6" />
          <path d="M 116 180 Q 118 180 120 180" strokeWidth="0.5" opacity="0.6" />
          <path d="M 117 160 Q 119 160 121 160" strokeWidth="0.5" opacity="0.6" />
          <path d="M 117 140 Q 119 140 121 140" strokeWidth="0.5" opacity="0.6" />
          <path d="M 118 120 Q 120 120 122 120" strokeWidth="0.5" opacity="0.6" />
          
          {/* Major branches with detail */}
          <path d="M 110 500 Q 130 480 150 465 Q 170 450 190 440" strokeWidth="5" />
          <path d="M 112 480 Q 95 465 78 450 Q 61 435 45 422" strokeWidth="5" />
          <path d="M 111 450 Q 135 430 158 415 Q 180 400 200 390" strokeWidth="4" />
          <path d="M 113 420 Q 88 405 65 392 Q 45 380 28 370" strokeWidth="4" />
          <path d="M 112 380 Q 140 360 165 345 Q 188 332 210 322" strokeWidth="4" />
          <path d="M 114 350 Q 85 335 58 322 Q 35 310 15 300" strokeWidth="4" />
          <path d="M 113 310 Q 145 290 175 275 Q 202 262 225 252" strokeWidth="3.5" />
          <path d="M 115 280 Q 82 265 52 252 Q 28 242 8 233" strokeWidth="3.5" />
          <path d="M 114 240 Q 148 220 180 205 Q 208 192 232 182" strokeWidth="3" />
          <path d="M 116 210 Q 80 195 48 182 Q 22 172 2 164" strokeWidth="3" />
          <path d="M 115 170 Q 152 150 185 135 Q 215 122 240 112" strokeWidth="2.5" />
          <path d="M 117 140 Q 78 125 43 112 Q 15 102 -5 94" strokeWidth="2.5" />
          <path d="M 116 100 Q 155 80 190 65 Q 220 52 245 42" strokeWidth="2" />
          <path d="M 118 70 Q 75 55 38 42 Q 8 32 -15 24" strokeWidth="2" />
          
          {/* Secondary branches */}
          <path d="M 150 465 Q 165 455 180 448" strokeWidth="2.5" />
          <path d="M 150 465 Q 155 450 160 435" strokeWidth="2" />
          <path d="M 78 450 Q 65 442 52 436" strokeWidth="2.5" />
          <path d="M 78 450 Q 75 435 72 420" strokeWidth="2" />
          <path d="M 158 415 Q 172 405 186 398" strokeWidth="2" />
          <path d="M 158 415 Q 163 400 168 385" strokeWidth="1.8" />
          <path d="M 65 392 Q 52 385 40 380" strokeWidth="2" />
          <path d="M 165 345 Q 180 335 195 328" strokeWidth="2" />
          <path d="M 58 322 Q 45 316 32 312" strokeWidth="2" />
          <path d="M 175 275 Q 192 265 208 258" strokeWidth="1.8" />
          <path d="M 52 252 Q 38 246 25 242" strokeWidth="1.8" />
          <path d="M 180 205 Q 198 195 215 188" strokeWidth="1.5" />
          <path d="M 48 182 Q 33 176 20 172" strokeWidth="1.5" />
          <path d="M 185 135 Q 205 125 222 118" strokeWidth="1.3" />
          <path d="M 43 112 Q 28 106 15 102" strokeWidth="1.3" />
          <path d="M 190 65 Q 210 55 228 48" strokeWidth="1.2" />
          <path d="M 38 42 Q 23 36 10 32" strokeWidth="1.2" />
          
          {/* Leaf clusters - right side */}
          {/* Top clusters */}
          <circle cx="245" cy="42" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="243" cy="44" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="247" cy="45" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="245" cy="47" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="249" cy="44" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="241" cy="46" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="246" cy="40" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="250" cy="47" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="228" cy="48" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="226" cy="50" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="230" cy="51" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="228" cy="53" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="232" cy="50" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="240" cy="112" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="238" cy="114" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="242" cy="115" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="240" cy="117" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="244" cy="114" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="236" cy="116" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="241" cy="110" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="245" cy="117" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="239" cy="119" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="243" cy="120" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="222" cy="118" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="220" cy="120" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="224" cy="121" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="226" cy="123" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="218" cy="122" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="232" cy="182" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="230" cy="184" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="234" cy="185" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="232" cy="187" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="236" cy="184" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="228" cy="186" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="233" cy="180" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="237" cy="187" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="231" cy="189" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="235" cy="190" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="229" cy="191" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="238" cy="189" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="215" cy="188" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="213" cy="190" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="217" cy="191" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="219" cy="193" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="211" cy="192" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="216" cy="194" r="1.2" fill="currentColor" opacity="0.7" />
          
          <circle cx="225" cy="252" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="223" cy="254" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="227" cy="255" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="225" cy="257" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="229" cy="254" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="221" cy="256" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="226" cy="250" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="230" cy="257" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="224" cy="259" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="228" cy="260" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="222" cy="261" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="231" cy="259" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="227" cy="262" r="1.2" fill="currentColor" opacity="0.7" />
          
          <circle cx="208" cy="258" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="206" cy="260" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="210" cy="261" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="212" cy="263" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="204" cy="262" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="210" cy="322" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="208" cy="324" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="212" cy="325" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="210" cy="327" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="214" cy="324" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="206" cy="326" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="211" cy="320" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="215" cy="327" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="209" cy="329" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="213" cy="330" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="207" cy="331" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="216" cy="329" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="212" cy="332" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="218" cy="330" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="195" cy="328" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="193" cy="330" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="197" cy="331" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="199" cy="333" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="191" cy="332" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="196" cy="334" r="1.2" fill="currentColor" opacity="0.7" />
          
          <circle cx="200" cy="390" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="198" cy="392" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="202" cy="393" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="200" cy="395" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="204" cy="392" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="196" cy="394" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="201" cy="388" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="205" cy="395" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="199" cy="397" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="203" cy="398" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="197" cy="399" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="206" cy="397" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="202" cy="400" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="208" cy="398" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="204" cy="401" r="1.2" fill="currentColor" opacity="0.7" />
          
          <circle cx="186" cy="398" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="184" cy="400" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="188" cy="401" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="190" cy="403" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="182" cy="402" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="187" cy="404" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="191" cy="405" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="190" cy="440" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="188" cy="442" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="192" cy="443" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="190" cy="445" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="194" cy="442" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="186" cy="444" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="191" cy="438" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="195" cy="445" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="189" cy="447" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="193" cy="448" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="187" cy="449" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="196" cy="447" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="192" cy="450" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="198" cy="448" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="194" cy="451" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="197" cy="452" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="180" cy="448" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="178" cy="450" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="182" cy="451" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="184" cy="453" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="176" cy="452" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="181" cy="454" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="185" cy="455" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="179" cy="456" r="1.2" fill="currentColor" opacity="0.7" />
          
          {/* Leaf clusters - left side */}
          <circle cx="-15" cy="24" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="-13" cy="26" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="-17" cy="27" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="-15" cy="29" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="-19" cy="26" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="-11" cy="28" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="-16" cy="22" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="-20" cy="29" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="10" cy="32" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="8" cy="34" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="12" cy="35" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="14" cy="37" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="6" cy="36" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="-5" cy="94" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="-3" cy="96" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="-7" cy="97" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="-5" cy="99" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="-9" cy="96" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="-1" cy="98" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="-6" cy="92" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="-10" cy="99" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="-4" cy="101" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="-8" cy="102" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="15" cy="102" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="13" cy="104" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="17" cy="105" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="19" cy="107" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="11" cy="106" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="2" cy="164" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="0" cy="166" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="4" cy="167" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="2" cy="169" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="6" cy="166" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="-2" cy="168" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="3" cy="162" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="7" cy="169" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="1" cy="171" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="5" cy="172" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="-1" cy="173" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="8" cy="171" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="20" cy="172" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="18" cy="174" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="22" cy="175" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="24" cy="177" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="16" cy="176" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="21" cy="178" r="1.2" fill="currentColor" opacity="0.7" />
          
          <circle cx="8" cy="233" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="6" cy="235" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="10" cy="236" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="8" cy="238" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="12" cy="235" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="4" cy="237" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="9" cy="231" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="13" cy="238" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="7" cy="240" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="11" cy="241" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="5" cy="242" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="14" cy="240" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="10" cy="243" r="1.2" fill="currentColor" opacity="0.7" />
          
          <circle cx="25" cy="242" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="23" cy="244" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="27" cy="245" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="29" cy="247" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="21" cy="246" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="15" cy="300" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="13" cy="302" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="17" cy="303" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="15" cy="305" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="19" cy="302" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="11" cy="304" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="16" cy="298" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="20" cy="305" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="14" cy="307" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="18" cy="308" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="12" cy="309" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="21" cy="307" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="17" cy="310" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="23" cy="308" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="32" cy="312" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="30" cy="314" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="34" cy="315" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="36" cy="317" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="28" cy="316" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="33" cy="318" r="1.2" fill="currentColor" opacity="0.7" />
          
          <circle cx="28" cy="370" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="26" cy="372" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="30" cy="373" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="28" cy="375" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="32" cy="372" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="24" cy="374" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="29" cy="368" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="33" cy="375" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="27" cy="377" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="31" cy="378" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="25" cy="379" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="34" cy="377" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="30" cy="380" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="36" cy="378" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="32" cy="381" r="1.2" fill="currentColor" opacity="0.7" />
          
          <circle cx="40" cy="380" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="38" cy="382" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="42" cy="383" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="44" cy="385" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="36" cy="384" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="41" cy="386" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="45" cy="387" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="45" cy="422" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="43" cy="424" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="47" cy="425" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="45" cy="427" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="49" cy="424" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="41" cy="426" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="46" cy="420" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="50" cy="427" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="44" cy="429" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="48" cy="430" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="42" cy="431" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="51" cy="429" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="47" cy="432" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="53" cy="430" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="49" cy="433" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="52" cy="434" r="1.3" fill="currentColor" opacity="0.7" />
          
          <circle cx="52" cy="436" r="1.4" fill="currentColor" opacity="0.7" />
          <circle cx="50" cy="438" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="54" cy="439" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="56" cy="441" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="48" cy="440" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="53" cy="442" r="1.2" fill="currentColor" opacity="0.7" />
          <circle cx="57" cy="443" r="1.3" fill="currentColor" opacity="0.7" />
          <circle cx="51" cy="444" r="1.2" fill="currentColor" opacity="0.7" />
          
        </g>
      </svg>
    </div>
  );
}
