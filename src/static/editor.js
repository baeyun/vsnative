export default `<!DOCTYPE html>
<!-- saved from url=(0041)http://localhost:8888/browser-amd-editor/ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
<script async="async" type="text/javascript" src="./localhost_files/editor.main.js.download"></script><link rel="stylesheet" type="text/css" data-name="vs/editor/editor.main" href="./localhost_files/editor.main.css"><script async="async" type="text/javascript" src="./localhost_files/editor.main.nls.js.download"></script><style type="text/css" media="screen" class="monaco-colors">.monaco-editor .minimap-slider, .monaco-editor .minimap-slider .minimap-slider-horizontal { background: rgba(121, 121, 121, 0.2); }
.monaco-editor .minimap-slider:hover, .monaco-editor .minimap-slider:hover .minimap-slider-horizontal { background: rgba(100, 100, 100, 0.35); }
.monaco-editor .minimap-slider.active, .monaco-editor .minimap-slider.active .minimap-slider-horizontal { background: rgba(191, 191, 191, 0.2); }
.monaco-editor .minimap-shadow-visible { box-shadow: #000000 -6px 0 6px -6px inset; }
.monaco-editor .scroll-decoration { box-shadow: #000000 0 6px 6px -6px inset; }
.monaco-editor .focused .selected-text { background-color: #264f78; }
.monaco-editor .selected-text { background-color: #3a3d41; }
.monaco-editor, .monaco-editor-background, .monaco-editor .inputarea.ime-input { background-color: #1e1e1e; }
.monaco-editor, .monaco-editor .inputarea.ime-input { color: #d4d4d4; }
.monaco-editor .margin { background-color: #1e1e1e; }
.monaco-editor .rangeHighlight { background-color: rgba(255, 255, 255, 0.04); }
.vs-whitespace { color: rgba(227, 228, 226, 0.16) !important; }
.monaco-editor .view-overlays .current-line { border: 2px solid #282828; }
.monaco-editor .margin-view-overlays .current-line-margin { border: 2px solid #282828; }
.monaco-editor .lines-content .cigr { box-shadow: 1px 0 0 0 #404040 inset; }
.monaco-editor .lines-content .cigra { box-shadow: 1px 0 0 0 #707070 inset; }
.monaco-editor .line-numbers { color: #5a5a5a; }
.monaco-editor .view-ruler { box-shadow: 1px 0 0 0 #5a5a5a inset; }
.monaco-editor .cursor { background-color: #aeafad; border-color: #aeafad; color: #515052; }
.monaco-editor .squiggly-error { background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23ea4646'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") repeat-x bottom left; }
.monaco-editor .squiggly-warning { background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%234d9e4d'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") repeat-x bottom left; }
.monaco-editor .squiggly-info { background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23008000'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") repeat-x bottom left; }
.monaco-editor .squiggly-hint { background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%223%22%20width%3D%2212%22%3E%3Cg%20fill%3D%22rgba(238%2C%20238%2C%20238%2C%200.7)%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%225%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%229%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") no-repeat bottom left; }
.monaco-editor.vs .valueSetReplacement { outline: solid 2px #888888; }
.monaco-diff-editor .diff-review-line-number { color: #5a5a5a; }
.monaco-diff-editor .diff-review-shadow { box-shadow: #000000 0 -6px 6px -6px inset; }
.monaco-editor .line-insert, .monaco-editor .char-insert { background-color: rgba(155, 185, 85, 0.2); }
.monaco-diff-editor .line-insert, .monaco-diff-editor .char-insert { background-color: rgba(155, 185, 85, 0.2); }
.monaco-editor .inline-added-margin-view-zone { background-color: rgba(155, 185, 85, 0.2); }
.monaco-editor .line-delete, .monaco-editor .char-delete { background-color: rgba(255, 0, 0, 0.2); }
.monaco-diff-editor .line-delete, .monaco-diff-editor .char-delete { background-color: rgba(255, 0, 0, 0.2); }
.monaco-editor .inline-deleted-margin-view-zone { background-color: rgba(255, 0, 0, 0.2); }
.monaco-diff-editor.side-by-side .editor.modified { box-shadow: -6px 0 5px -5px #000000; }
.monaco-editor .bracket-match { background-color: rgba(0, 100, 0, 0.1); }
.monaco-editor .bracket-match { border: 1px solid #888888; }
.monaco-editor .codelens-decoration { color: #999999; }
.monaco-editor .codelens-decoration > a:hover { color: #4e94ce !important; }
.monaco-editor .findOptionsWidget { background-color: #2d2d30; }
.monaco-editor .findOptionsWidget { box-shadow: 0 2px 8px #000000; }
.monaco-editor .findMatch { background-color: rgba(234, 92, 0, 0.33); }
.monaco-editor .currentFindMatch { background-color: #515c6a; }
.monaco-editor .findScope { background-color: rgba(58, 61, 65, 0.4); }
.monaco-editor .find-widget { background-color: #2d2d30; }
.monaco-editor .find-widget { box-shadow: 0 2px 8px #000000; }
.monaco-editor .find-widget.no-results .matchesCount { color: #f48771; }
.monaco-editor .find-widget .monaco-sash { background-color: #454545; width: 3px !important; margin-left: -4px;}
.monaco-editor .hoverHighlight { background-color: rgba(38, 79, 120, 0.25); }
.monaco-editor .monaco-editor-hover { background-color: #2d2d30; }
.monaco-editor .monaco-editor-hover { border: 1px solid #454545; }
.monaco-editor .monaco-editor-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid rgba(69, 69, 69, 0.5); }
.monaco-editor .monaco-editor-hover a { color: #4080d0; }
.monaco-editor .monaco-editor-hover code { background-color: rgba(10, 10, 10, 0.4); }
.monaco-editor .detected-link-active { color: #4e94ce !important; }
.monaco-editor .monaco-editor-overlaymessage .anchor { border-top-color: #007acc; }
.monaco-editor .monaco-editor-overlaymessage .message { border: 1px solid #007acc; }
.monaco-editor .monaco-editor-overlaymessage .message { background-color: #063b49; }
.monaco-editor .parameter-hints-widget { border: 1px solid #454545; }
.monaco-editor .parameter-hints-widget.multiple .body { border-left: 1px solid rgba(69, 69, 69, 0.5); }
.monaco-editor .parameter-hints-widget .signature.has-docs { border-bottom: 1px solid rgba(69, 69, 69, 0.5); }
.monaco-editor .parameter-hints-widget { background-color: #2d2d30; }
.monaco-editor .parameter-hints-widget a { color: #4080d0; }
.monaco-editor .parameter-hints-widget code { background-color: rgba(10, 10, 10, 0.4); }
.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-highlighted-label .highlight { color: #0097fb; }
.monaco-editor .suggest-widget { color: #d4d4d4; }
.monaco-editor .suggest-widget a { color: #4080d0; }
.monaco-editor .suggest-widget code { background-color: rgba(10, 10, 10, 0.4); }
.monaco-editor .focused .selectionHighlight { background-color: rgba(173, 214, 255, 0.15); }
.monaco-editor .selectionHighlight { background-color: rgba(173, 214, 255, 0.07); }
.monaco-editor .wordHighlight { background-color: rgba(87, 87, 87, 0.72); }
.monaco-editor .wordHighlightStrong { background-color: rgba(0, 73, 114, 0.72); }
.monaco-editor .accessibilityHelpWidget { background-color: #2d2d30; }
.monaco-editor .accessibilityHelpWidget { box-shadow: 0 2px 8px #000000; }
.monaco-editor .tokens-inspect-widget { border: 1px solid #454545; }
.monaco-editor .tokens-inspect-widget .tokens-inspect-separator { background-color: #454545; }
.monaco-editor .tokens-inspect-widget { background-color: #2d2d30; }
.monaco-editor .reference-zone-widget .ref-tree .referenceMatch { background-color: rgba(234, 92, 0, 0.3); }
.monaco-editor .reference-zone-widget .preview .reference-decoration { background-color: rgba(255, 143, 0, 0.6); }
.monaco-editor .reference-zone-widget .ref-tree { background-color: #252526; }
.monaco-editor .reference-zone-widget .ref-tree { color: #bbbbbb; }
.monaco-editor .reference-zone-widget .ref-tree .reference-file { color: #ffffff; }
.monaco-editor .reference-zone-widget .ref-tree .monaco-tree.focused .monaco-tree-rows > .monaco-tree-row.selected:not(.highlighted) { background-color: rgba(51, 153, 255, 0.2); }
.monaco-editor .reference-zone-widget .ref-tree .monaco-tree.focused .monaco-tree-rows > .monaco-tree-row.selected:not(.highlighted) { color: #ffffff !important; }
.monaco-editor .reference-zone-widget .preview .monaco-editor .monaco-editor-background,.monaco-editor .reference-zone-widget .preview .monaco-editor .inputarea.ime-input {	background-color: #001f33;}
.monaco-editor .reference-zone-widget .preview .monaco-editor .margin {	background-color: #001f33;}
.monaco-editor .goto-definition-link { color: #4e94ce !important; }

.mtk1 { color: #d4d4d4; }
.mtk2 { color: #1e1e1e; }
.mtk3 { color: #cc6666; }
.mtk4 { color: #9cdcfe; }
.mtk5 { color: #ce9178; }
.mtk6 { color: #b5cea8; }
.mtk7 { color: #608b4e; }
.mtk8 { color: #569cd6; }
.mtk9 { color: #dcdcdc; }
.mtk10 { color: #808080; }
.mtk11 { color: #f44747; }
.mtk12 { color: #c586c0; }
.mtk13 { color: #a79873; }
.mtk14 { color: #dd6a6f; }
.mtk15 { color: #5bb498; }
.mtk16 { color: #909090; }
.mtk17 { color: #778899; }
.mtk18 { color: #ff00ff; }
.mtk19 { color: #b46695; }
.mtk20 { color: #ff0000; }
.mtk21 { color: #4f76ac; }
.mtk22 { color: #3dc9b0; }
.mtk23 { color: #74b0df; }
.mtk24 { color: #4864aa; }
.mtki { font-style: italic; }
.mtkb { font-weight: bold; }
.mtku { text-decoration: underline; }</style><style type="text/css" media="screen"></style><script async="async" type="text/javascript" src="./localhost_files/tsMode.js.download"></script><script async="async" type="text/javascript" src="./localhost_files/typescriptServices.js.download"></script></head>
<body style="margin: 0;overflow: hidden;">

<div id="container" style="width: 100%; height: 100vh;" data-keybinding-context="1" data-mode-id="javascript"><div class="monaco-editor vs-dark" data-uri="inmemory://model/1" style="width: 1920px; height: 1094px;"><div data-mprt="3" class="overflow-guard" style="width: 1920px; height: 1094px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; will-change: transform; top: 0px; height: 13132px; width: 78px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 13132px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 78px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 19px; line-height: 26px; letter-spacing: 0px; height: 13132px;"><div style="position:absolute;top:0px;width:100%;height:26px;"><div class="current-line" style="width:78px; height:26px;"></div><div class="line-numbers" style="left:0px;width:52px;">1</div></div><div style="position:absolute;top:26px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">2</div></div><div style="position:absolute;top:52px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">3</div></div><div style="position:absolute;top:78px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">4</div></div><div style="position:absolute;top:104px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">5</div></div><div style="position:absolute;top:130px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">6</div></div><div style="position:absolute;top:156px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">7</div></div><div style="position:absolute;top:182px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">8</div></div><div style="position:absolute;top:208px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">9</div></div><div style="position:absolute;top:234px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">10</div></div><div style="position:absolute;top:260px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">11</div></div><div style="position:absolute;top:286px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">12</div></div><div style="position:absolute;top:312px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">13</div></div><div style="position:absolute;top:338px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">14</div></div><div style="position:absolute;top:364px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">15</div></div><div style="position:absolute;top:390px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">16</div></div><div style="position:absolute;top:416px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">17</div></div><div style="position:absolute;top:442px;width:100%;height:26px;"><div class="cldr folding" style="left:52px;width:26px;"></div><div class="line-numbers" style="left:0px;width:52px;">18</div></div><div style="position:absolute;top:468px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">19</div></div><div style="position:absolute;top:494px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">20</div></div><div style="position:absolute;top:520px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">21</div></div><div style="position:absolute;top:546px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">22</div></div><div style="position:absolute;top:572px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">23</div></div><div style="position:absolute;top:598px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">24</div></div><div style="position:absolute;top:624px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">25</div></div><div style="position:absolute;top:650px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">26</div></div><div style="position:absolute;top:676px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">27</div></div><div style="position:absolute;top:702px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">28</div></div><div style="position:absolute;top:728px;width:100%;height:26px;"><div class="cldr folding" style="left:52px;width:26px;"></div><div class="line-numbers" style="left:0px;width:52px;">29</div></div><div style="position:absolute;top:754px;width:100%;height:26px;"><div class="cldr folding" style="left:52px;width:26px;"></div><div class="line-numbers" style="left:0px;width:52px;">30</div></div><div style="position:absolute;top:780px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">31</div></div><div style="position:absolute;top:806px;width:100%;height:26px;"><div class="cldr folding" style="left:52px;width:26px;"></div><div class="line-numbers" style="left:0px;width:52px;">32</div></div><div style="position:absolute;top:832px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">33</div></div><div style="position:absolute;top:858px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">34</div></div><div style="position:absolute;top:884px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">35</div></div><div style="position:absolute;top:910px;width:100%;height:26px;"><div class="cldr folding" style="left:52px;width:26px;"></div><div class="line-numbers" style="left:0px;width:52px;">36</div></div><div style="position:absolute;top:936px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">37</div></div><div style="position:absolute;top:962px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">38</div></div><div style="position:absolute;top:988px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">39</div></div><div style="position:absolute;top:1014px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">40</div></div><div style="position:absolute;top:1040px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">41</div></div><div style="position:absolute;top:1066px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">42</div></div><div style="position:absolute;top:1092px;width:100%;height:26px;"><div class="line-numbers" style="left:0px;width:52px;">43</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 78px; width: 1842px; height: 1094px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; will-change: transform; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 1722px;"><div style="position:absolute;top:0px;width:100%;height:26px;"><div class="current-line" style="width:1722px; height:26px;"></div></div><div style="position:absolute;top:26px;width:100%;height:26px;"></div><div style="position:absolute;top:52px;width:100%;height:26px;"></div><div style="position:absolute;top:78px;width:100%;height:26px;"></div><div style="position:absolute;top:104px;width:100%;height:26px;"></div><div style="position:absolute;top:130px;width:100%;height:26px;"></div><div style="position:absolute;top:156px;width:100%;height:26px;"></div><div style="position:absolute;top:182px;width:100%;height:26px;"></div><div style="position:absolute;top:208px;width:100%;height:26px;"></div><div style="position:absolute;top:234px;width:100%;height:26px;"></div><div style="position:absolute;top:260px;width:100%;height:26px;"></div><div style="position:absolute;top:286px;width:100%;height:26px;"></div><div style="position:absolute;top:312px;width:100%;height:26px;"></div><div style="position:absolute;top:338px;width:100%;height:26px;"></div><div style="position:absolute;top:364px;width:100%;height:26px;"></div><div style="position:absolute;top:390px;width:100%;height:26px;"></div><div style="position:absolute;top:416px;width:100%;height:26px;"></div><div style="position:absolute;top:442px;width:100%;height:26px;"></div><div style="position:absolute;top:468px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:494px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:520px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:546px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:572px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:598px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:624px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:650px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:676px;width:100%;height:26px;"></div><div style="position:absolute;top:702px;width:100%;height:26px;"></div><div style="position:absolute;top:728px;width:100%;height:26px;"></div><div style="position:absolute;top:754px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:780px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div><div class="cigr" style="left:20.890625px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:806px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div><div class="cigr" style="left:20.890625px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:832px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div><div class="cigr" style="left:20.890625px;height:26px;width:20.890625px"></div><div class="cigr" style="left:41.78125px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:858px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div><div class="cigr" style="left:20.890625px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:884px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:910px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:936px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div><div class="cigr" style="left:20.890625px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:962px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div><div class="cigr" style="left:20.890625px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:988px;width:100%;height:26px;"><div class="cigr" style="left:0px;height:26px;width:20.890625px"></div></div><div style="position:absolute;top:1014px;width:100%;height:26px;"></div><div style="position:absolute;top:1040px;width:100%;height:26px;"></div><div style="position:absolute;top:1066px;width:100%;height:26px;"></div><div style="position:absolute;top:1092px;width:100%;height:26px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 19px; line-height: 26px; letter-spacing: 0px; width: 1722px; height: 13132px;"><div style="top:0px;height:26px;" class="view-line"><span><span class="mtk7">//&nbsp;Ignore&nbsp;warning&nbsp;about&nbsp;'new&nbsp;String()'</span></span></div><div style="top:26px;height:26px;" class="view-line"><span><span class="mtk7">/*&nbsp;eslint&nbsp;no-new-wrappers:&nbsp;0&nbsp;*/</span></span></div><div style="top:52px;height:26px;" class="view-line"><span><span class="mtk5">'use&nbsp;strict'</span><span class="mtk9">;</span></span></div><div style="top:78px;height:26px;" class="view-line"><span><span>&nbsp;</span></span></div><div style="top:104px;height:26px;" class="view-line"><span><span class="mtk8">var</span><span class="mtk1">&nbsp;os&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;</span><span class="mtk8">require</span><span class="mtk9">(</span><span class="mtk5">'os'</span><span class="mtk9">);</span></span></div><div style="top:130px;height:26px;" class="view-line"><span><span class="mtk8">var</span><span class="mtk1">&nbsp;fs&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;</span><span class="mtk8">require</span><span class="mtk9">(</span><span class="mtk5">'fs'</span><span class="mtk9">);</span></span></div><div style="top:156px;height:26px;" class="view-line"><span><span class="mtk8">var</span><span class="mtk1">&nbsp;glob&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;</span><span class="mtk8">require</span><span class="mtk9">(</span><span class="mtk5">'glob'</span><span class="mtk9">);</span></span></div><div style="top:182px;height:26px;" class="view-line"><span><span class="mtk8">var</span><span class="mtk1">&nbsp;shell&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;</span><span class="mtk8">require</span><span class="mtk9">(</span><span class="mtk5">'..'</span><span class="mtk9">);</span></span></div><div style="top:208px;height:26px;" class="view-line"><span><span>&nbsp;</span></span></div><div style="top:234px;height:26px;" class="view-line"><span><span class="mtk8">var</span><span class="mtk1">&nbsp;shellMethods&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;Object</span><span class="mtk9">.</span><span class="mtk1">create</span><span class="mtk9">(</span><span class="mtk1">shell</span><span class="mtk9">);</span></span></div><div style="top:260px;height:26px;" class="view-line"><span><span>&nbsp;</span></span></div><div style="top:286px;height:26px;" class="view-line"><span><span class="mtk1">exports</span><span class="mtk9">.</span><span class="mtk1">extend&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;Object</span><span class="mtk9">.</span><span class="mtk1">assign</span><span class="mtk9">;</span></span></div><div style="top:312px;height:26px;" class="view-line"><span><span>&nbsp;</span></span></div><div style="top:338px;height:26px;" class="view-line"><span><span class="mtk7">//&nbsp;Check&nbsp;if&nbsp;we're&nbsp;running&nbsp;under&nbsp;electron</span></span></div><div style="top:364px;height:26px;" class="view-line"><span><span class="mtk8">var</span><span class="mtk1">&nbsp;isElectron&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;Boolean</span><span class="mtk9">(</span><span class="mtk1">process</span><span class="mtk9">.</span><span class="mtk1">versions</span><span class="mtk9">.</span><span class="mtk1">electron</span><span class="mtk9">);</span></span></div><div style="top:390px;height:26px;" class="view-line"><span><span>&nbsp;</span></span></div><div style="top:416px;height:26px;" class="view-line"><span><span class="mtk7">//&nbsp;Module&nbsp;globals&nbsp;(assume&nbsp;no&nbsp;execPath&nbsp;by&nbsp;default)</span></span></div><div style="top:442px;height:26px;" class="view-line"><span><span class="mtk8">var</span><span class="mtk1">&nbsp;DEFAULT_CONFIG&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;</span><span class="mtk9">{</span></span></div><div style="top:468px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;fatal</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk8">false</span><span class="mtk9">,</span></span></div><div style="top:494px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;globOptions</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk9">{},</span></span></div><div style="top:520px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;maxdepth</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk6">255</span><span class="mtk9">,</span></span></div><div style="top:546px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;noglob</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk8">false</span><span class="mtk9">,</span></span></div><div style="top:572px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;silent</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk8">false</span><span class="mtk9">,</span></span></div><div style="top:598px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;verbose</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk8">false</span><span class="mtk9">,</span></span></div><div style="top:624px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;execPath</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk8">null</span><span class="mtk9">,</span></span></div><div style="top:650px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;bufLength</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk6">64</span><span class="mtk1">&nbsp;</span><span class="mtk9">*</span><span class="mtk1">&nbsp;</span><span class="mtk6">1024</span><span class="mtk9">,</span><span class="mtk1">&nbsp;</span><span class="mtk7">//&nbsp;64KB</span></span></div><div style="top:676px;height:26px;" class="view-line"><span><span class="mtk9">};</span></span></div><div style="top:702px;height:26px;" class="view-line"><span><span>&nbsp;</span></span></div><div style="top:728px;height:26px;" class="view-line"><span><span class="mtk8">var</span><span class="mtk1">&nbsp;config&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;</span><span class="mtk9">{</span></span></div><div style="top:754px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;reset</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk8">function</span><span class="mtk1">&nbsp;</span><span class="mtk9">()</span><span class="mtk1">&nbsp;</span><span class="mtk9">{</span></span></div><div style="top:780px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;Object</span><span class="mtk9">.</span><span class="mtk1">assign</span><span class="mtk9">(</span><span class="mtk8">this</span><span class="mtk9">,</span><span class="mtk1">&nbsp;DEFAULT_CONFIG</span><span class="mtk9">);</span></span></div><div style="top:806px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="mtk8">if</span><span class="mtk1">&nbsp;</span><span class="mtk9">(!</span><span class="mtk1">isElectron</span><span class="mtk9">)</span><span class="mtk1">&nbsp;</span><span class="mtk9">{</span></span></div><div style="top:832px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="mtk8">this</span><span class="mtk9">.</span><span class="mtk1">execPath&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;process</span><span class="mtk9">.</span><span class="mtk1">execPath</span><span class="mtk9">;</span></span></div><div style="top:858px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="mtk9">}</span></span></div><div style="top:884px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;</span><span class="mtk9">},</span></span></div><div style="top:910px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;resetForTesting</span><span class="mtk9">:</span><span class="mtk1">&nbsp;</span><span class="mtk8">function</span><span class="mtk1">&nbsp;</span><span class="mtk9">()</span><span class="mtk1">&nbsp;</span><span class="mtk9">{</span></span></div><div style="top:936px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="mtk8">this</span><span class="mtk9">.</span><span class="mtk1">reset</span><span class="mtk9">();</span></span></div><div style="top:962px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="mtk8">this</span><span class="mtk9">.</span><span class="mtk1">silent&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;</span><span class="mtk8">true</span><span class="mtk9">;</span></span></div><div style="top:988px;height:26px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;</span><span class="mtk9">},</span></span></div><div style="top:1014px;height:26px;" class="view-line"><span><span class="mtk9">};</span></span></div><div style="top:1040px;height:26px;" class="view-line"><span><span>&nbsp;</span></span></div><div style="top:1066px;height:26px;" class="view-line"><span><span class="mtk1">config</span><span class="mtk9">.</span><span class="mtk1">reset</span><span class="mtk9">();</span></span></div><div style="top:1092px;height:26px;" class="view-line"><span><span class="mtk1">exports</span><span class="mtk9">.</span><span class="mtk1">config&nbsp;</span><span class="mtk9">=</span><span class="mtk1">&nbsp;config</span><span class="mtk9">;</span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"><div class="lightbulb-glyph" title="Show Fixes (Ctrl+.)" widgetid="LightBulbWidget" style="position: absolute; visibility: hidden; max-width: 1722px;"></div></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor " style="height: 26px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 19px; line-height: 26px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 1708px; height: 10px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; will-change: transform; width: 1708px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="14" height="1094" style="position: absolute; will-change: transform; top: 0px; right: 0px; width: 14px; height: 1094px;"></canvas><div role="presentation" aria-hidden="true" class="visible scrollbar vertical" style="position: absolute; width: 14px; height: 1094px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; will-change: transform; height: 91px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 1786px;"></div><textarea data-mprt="6" class="inputarea" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." role="textbox" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-size: 1px; line-height: 26px; top: 0px; left: 78px; width: 1px; height: 1px;"></textarea><div style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 1920px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div class="monaco-editor-hover hidden" aria-hidden="true" role="presentation" widgetid="editor.contrib.modesGlyphHoverWidget" style="position: absolute;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 1786px; width: 120px; height: 1094px;"><div class="minimap-shadow-hidden" style="height: 1094px;"></div><canvas width="120" height="1094" style="position: absolute; left: 0px; width: 120px; height: 1094px;"></canvas><div class="minimap-slider" style="position: absolute; will-change: transform; width: 120px; top: 0px; height: 84px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 120px; top: 0px; height: 84px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="height: 26px; box-shadow: rgb(0, 0, 0) 0px 2px 8px; position: absolute; visibility: hidden; max-width: 1920px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 19px; background-color: rgb(60, 60, 60); color: rgb(204, 204, 204); border-width: 0px; border-style: none;"></div><div class="monaco-editor-hover hidden" tabindex="0" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1920px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-editor-hover-content" style="overflow: hidden; font-size: 19px; line-height: 26px; max-height: 273.5px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; will-change: transform;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; will-change: transform;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow top-left-corner"></div></div></div></div><div class="context-view monaco-builder-hidden" aria-hidden="true"></div></div></div>

<!-- OR ANY OTHER AMD LOADER HERE INSTEAD OF loader.js -->
<script src="./localhost_files/loader.js.download"></script>
<script>
	require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' }});

	require(['vs/editor/editor.main'], function() {
        // monaco.editor.FontInfo.fontSize = 40;
		var editor = monaco.editor.create(document.getElementById('container'), {
			language: 'javascript',
            theme: 'vs-dark',
            fontSize: 19,
			value: `+`// Ignore warning about 'new String()'
/* eslint no-new-wrappers: 0 */
'use strict';

var os = require('os');
var fs = require('fs');
var glob = require('glob');
var shell = require('..');

var shellMethods = Object.create(shell);

exports.extend = Object.assign;

// Check if we're running under electron
var isElectron = Boolean(process.versions.electron);

// Module globals (assume no execPath by default)
var DEFAULT_CONFIG = {
  fatal: false,
  globOptions: {},
  maxdepth: 255,
  noglob: false,
  silent: false,
  verbose: false,
  execPath: null,
  bufLength: 64 * 1024, // 64KB
};

var config = {
  reset: function () {
    Object.assign(this, DEFAULT_CONFIG);
    if (!isElectron) {
      this.execPath = process.execPath;
    }
  },
  resetForTesting: function () {
    this.reset();
    this.silent = true;
  },
};

config.reset();
exports.config = config;

var state = {
  error: null,
  errorCode: 0,
  currentCmd: 'shell.js',
  tempDir: null,
};
exports.state = state;

delete process.env.OLDPWD; // initially, there's no previous directory

// Reliably test if something is any sort of javascript object
function isObject(a) {
  return typeof a === 'object' && a !== null;
}
exports.isObject = isObject;

function log() {
  /* istanbul ignore next */
  if (!config.silent) {
    console.error.apply(console, arguments);
  }
}
exports.log = log;

// Converts strings to be equivalent across all platforms. Primarily responsible
// for making sure we use '/' instead of '\' as path separators, but this may be
// expanded in the future if necessary
function convertErrorOutput(msg) {
  if (typeof msg !== 'string') {
    throw new TypeError('input must be a string');
  }
  return msg.replace(/\\/g, '/');
}
exports.convertErrorOutput = convertErrorOutput;

// Shows error message. Throws if config.fatal is true
function error(msg, _code, options) {
  // Validate input
  if (typeof msg !== 'string') throw new Error('msg must be a string');

  var DEFAULT_OPTIONS = {
    continue: false,
    code: 1,
    prefix: state.currentCmd + ': ',
    silent: false,
  };

  if (typeof _code === 'number' && isObject(options)) {
    options.code = _code;
  } else if (isObject(_code)) { // no 'code'
    options = _code;
  } else if (typeof _code === 'number') { // no 'options'
    options = { code: _code };
  } else if (typeof _code !== 'number') { // only 'msg'
    options = {};
  }
  options = Object.assign({}, DEFAULT_OPTIONS, options);

  if (!state.errorCode) state.errorCode = options.code;

  var logEntry = convertErrorOutput(options.prefix + msg);
  state.error = state.error ? state.error + '\n' : '';
  state.error += logEntry;

  // Throw an error, or log the entry
  if (config.fatal) throw new Error(logEntry);
  if (msg.length > 0 && !options.silent) log(logEntry);

  if (!options.continue) {
    throw {
      msg: 'earlyExit',
      retValue: (new ShellString('', state.error, state.errorCode)),
    };
  }
}
exports.error = error;

//@
//@ ### ShellString(str)
//@
//@ Examples:
//@
//@ Turns a regular string into a string-like object similar to what each
//@ command returns. This has special methods, like
function ShellString(stdout, stderr, code) {
  var that;
  if (stdout instanceof Array) {
    that = stdout;
    that.stdout = stdout.join('\n');
    if (stdout.length > 0) that.stdout += '\n';
  } else {
    that = new String(stdout);
    that.stdout = stdout;
  }
  that.stderr = stderr;
  that.code = code;
  // A list of all commands that can appear on the right-hand side of a pipe
  // (populated by calls to common.wrap())
  pipeMethods.forEach(function (cmd) {
    that[cmd] = shellMethods[cmd].bind(that);
  });
  return that;
}

exports.ShellString = ShellString;

// Returns {'alice': true, 'bob': false} when passed a string and dictionary as follows:
//   parseOptions('-a', {'a':'alice', 'b':'bob'});
// Returns {'reference': 'string-value', 'bob': false} when passed two dictionaries of the form:
//   parseOptions({'-r': 'string-value'}, {'r':'reference', 'b':'bob'});
// Throws an error when passed a string that does not start with '-':
//   parseOptions('a', {'a':'alice'}); // throws
function parseOptions(opt, map, errorOptions) {
  // Validate input
  if (typeof opt !== 'string' && !isObject(opt)) {
    throw new Error('options must be strings or key-value pairs');
  } else if (!isObject(map)) {
    throw new Error('parseOptions() internal error: map must be an object');
  } else if (errorOptions && !isObject(errorOptions)) {
    throw new Error('parseOptions() internal error: errorOptions must be object');
  }

  if (opt === '--') {
    // This means there are no options.
    return {};
  }

  // All options are false by default
  var options = {};
  Object.keys(map).forEach(function (letter) {
    var optName = map[letter];
    if (optName[0] !== '!') {
      options[optName] = false;
    }
  });

  if (opt === '') return options; // defaults

  if (typeof opt === 'string') {
    if (opt[0] !== '-') {
      throw new Error("Options string must start with a '-'");
    }

    // e.g. chars = ['R', 'f']
    var chars = opt.slice(1).split('');

    chars.forEach(function (c) {
      if (c in map) {
        var optionName = map[c];
        if (optionName[0] === '!') {
          options[optionName.slice(1)] = false;
        } else {
          options[optionName] = true;
        }
      } else {
        error('option not recognized: ' + c, errorOptions || {});
      }
    });
  } else { // opt is an Object
    Object.keys(opt).forEach(function (key) {
      // key is a string of the form '-r', '-d', etc.
      var c = key[1];
      if (c in map) {
        var optionName = map[c];
        options[optionName] = opt[key]; // assign the given value
      } else {
        error('option not recognized: ' + c, errorOptions || {});
      }
    });
  }
  return options;
}
exports.parseOptions = parseOptions;

// Expands wildcards with matching (ie. existing) file names.
// For example:
//   expand(['file*.js']) = ['file1.js', 'file2.js', ...]
//   (if the files 'file1.js', 'file2.js', etc, exist in the current dir)
function expand(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('must be an array');
  }
  var expanded = [];
  list.forEach(function (listEl) {
    // Don't expand non-strings
    if (typeof listEl !== 'string') {
      expanded.push(listEl);
    } else {
      var ret;
      try {
        ret = glob.sync(listEl, config.globOptions);
        // if nothing matched, interpret the string literally
        ret = ret.length > 0 ? ret : [listEl];
      } catch (e) {
        // if glob fails, interpret the string literally
        ret = [listEl];
      }
      expanded = expanded.concat(ret);
    }
  });
  return expanded;
}
exports.expand = expand;

// Normalizes Buffer creation, using Buffer.alloc if possible.
// Also provides a good default buffer length for most use cases.
var buffer = typeof Buffer.alloc === 'function' ?
  function (len) {
    return Buffer.alloc(len || config.bufLength);
  } :
  function (len) {
    return new Buffer(len || config.bufLength);
  };
exports.buffer = buffer;

// Normalizes _unlinkSync() across platforms to match Unix behavior, i.e.
// file can be unlinked even if it's read-only, see https://github.com/joyent/node/issues/3006
function unlinkSync(file) {
  try {
    fs.unlinkSync(file);
  } catch (e) {
    // Try to override file permission
    /* istanbul ignore next */
    if (e.code === 'EPERM') {
      fs.chmodSync(file, '0666');
      fs.unlinkSync(file);
    } else {
      throw e;
    }
  }
}
exports.unlinkSync = unlinkSync;

// wrappers around common.statFollowLinks and common.statNoFollowLinks that clarify intent
// and improve readability
function statFollowLinks() {
  return fs.statSync.apply(fs, arguments);
}
exports.statFollowLinks = statFollowLinks;

function statNoFollowLinks() {
  return fs.lstatSync.apply(fs, arguments);
}
exports.statNoFollowLinks = statNoFollowLinks;

// e.g. 'shelljs_a5f185d0443ca...'
function randomFileName() {
  function randomHash(count) {
    if (count === 1) {
      return parseInt(16 * Math.random(), 10).toString(16);
    }
    var hash = '';
    for (var i = 0; i < count; i++) {
      hash += randomHash(1);
    }
    return hash;
  }

  return 'shelljs_' + randomHash(20);
}
exports.randomFileName = randomFileName;

// Common wrapper for all Unix-like commands that performs glob expansion,
// command-logging, and other nice things
function wrap(cmd, fn, options) {
  options = options || {};
  return function () {
    var retValue = null;

    state.currentCmd = cmd;
    state.error = null;
    state.errorCode = 0;

    try {
      var args = [].slice.call(arguments, 0);

      // Log the command to stderr, if appropriate
      if (config.verbose) {
        console.error.apply(console, [cmd].concat(args));
      }

      // If this is coming from a pipe, let's set the pipedValue (otherwise, set
      // it to the empty string)
      state.pipedValue = (this && typeof this.stdout === 'string') ? this.stdout : '';

      if (options.unix === false) { // this branch is for exec()
        retValue = fn.apply(this, args);
      } else { // and this branch is for everything else
        if (isObject(args[0]) && args[0].constructor.name === 'Object') {
        } else if (args.length === 0 || typeof args[0] !== 'string' || args[0].length <= 1 || args[0][0] !== '-') {
          args.unshift(''); // only add dummy option if '-option' not already present
        }

        // flatten out arrays that are arguments, to make the syntax:
        args = args.reduce(function (accum, cur) {
          if (Array.isArray(cur)) {
            return accum.concat(cur);
          }
          accum.push(cur);
          return accum;
        }, []);

        // Convert ShellStrings (basically just String objects) to regular strings
        args = args.map(function (arg) {
          if (isObject(arg) && arg.constructor.name === 'String') {
            return arg.toString();
          }
          return arg;
        });

        // Expand the '~' if appropriate
        var homeDir = os.homedir();
        args = args.map(function (arg) {
          if (typeof arg === 'string' && arg.slice(0, 2) === '~/' || arg === '~') {
            return arg.replace(/^~/, homeDir);
          }
          return arg;
        });

        // Perform glob-expansion on all arguments after globStart, but preserve
        // the arguments before it (like regexes for sed and grep)
        if (!config.noglob && options.allowGlobbing === true) {
          args = args.slice(0, options.globStart).concat(expand(args.slice(options.globStart)));
        }

        try {
          // parse options if options are provided
          if (isObject(options.cmdOptions)) {
            args[0] = parseOptions(args[0], options.cmdOptions);
          }

          retValue = fn.apply(this, args);
        } catch (e) {
          /* istanbul ignore else */
          if (e.msg === 'earlyExit') {
            retValue = e.retValue;
          } else {
            throw e; // this is probably a bug that should be thrown up the call stack
          }
        }
      }
    } catch (e) {
      /* istanbul ignore next */
      if (!state.error) {
        // If state.error hasn't been set it's an error thrown by Node, not us - probably a bug...
        e.name = 'ShellJSInternalError';
        throw e;
      }
      if (config.fatal) throw e;
    }

    if (options.wrapOutput &&
        (typeof retValue === 'string' || Array.isArray(retValue))) {
      retValue = new ShellString(retValue, state.error, state.errorCode);
    }

    state.currentCmd = 'shell.js';
    return retValue;
  };
} // wrap
exports.wrap = wrap;

// This returns all the input that is piped into the current command (or the
// empty string, if this isn't on the right-hand side of a pipe
function _readFromPipe() {
  return state.pipedValue;
}
exports.readFromPipe = _readFromPipe;

var DEFAULT_WRAP_OPTIONS = {
  allowGlobbing: true,
  canReceivePipe: false,
  cmdOptions: null,
  globStart: 1,
  pipeOnly: false,
  wrapOutput: true,
  unix: true,
};

// This is populated during plugin registration
var pipeMethods = [];

// Register a new ShellJS command
function _register(name, implementation, wrapOptions) {
  wrapOptions = wrapOptions || {};

  // Validate options
  Object.keys(wrapOptions).forEach(function (option) {
    if (!DEFAULT_WRAP_OPTIONS.hasOwnProperty(option)) {
      throw new Error("Unknown option '" + option + "'");
    }
    if (typeof wrapOptions[option] !== typeof DEFAULT_WRAP_OPTIONS[option]) {
      throw new TypeError("Unsupported type '" + typeof wrapOptions[option] +
        "' for option '" + option + "'");
    }
  });

  // If an option isn't specified, use the default
  wrapOptions = Object.assign({}, DEFAULT_WRAP_OPTIONS, wrapOptions);

  if (shell[name]) {
    throw new Error('Command ' + name + ' already exists');
  }

  if (wrapOptions.pipeOnly) {
    wrapOptions.canReceivePipe = true;
    shellMethods[name] = wrap(name, implementation, wrapOptions);
  } else {
    shell[name] = wrap(name, implementation, wrapOptions);
  }

  if (wrapOptions.canReceivePipe) {
    pipeMethods.push(name);
  }
}
exports.register = _register;
`+`
		});
	});

</script>

<div class="monaco-aria-container"><div class="monaco-alert" role="alert" aria-atomic="true"></div><div class="monaco-status" role="status" aria-atomic="true"></div></div></body></html>`