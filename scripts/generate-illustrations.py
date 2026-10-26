#!/usr/bin/env python3
"""
Generates the abstract, text-free SVG illustrations used by the portfolio.

They are intentionally NOT screenshots of real software: no product names, URLs,
metrics or customer data. Run from the repo root:  python3 scripts/generate-illustrations.py
"""
import math, os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "img")
W, H = 1600, 1000
INK, INK2, MUTE = "#2A2927", "#4A4843", "#D9CFC2"

def doc(body, bg, extra_defs=""):
    return (f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {W} {H}' width='{W}' height='{H}' "
            f"role='img'><defs>"
            "<filter id='sh' x='-20%' y='-20%' width='140%' height='155%'>"
            "<feDropShadow dx='0' dy='14' stdDeviation='16' flood-color='#6b4a33' flood-opacity='.14'/></filter>"
            f"{extra_defs}</defs><rect width='{W}' height='{H}' fill='{bg}'/>{body}</svg>")

def rect(x, y, w, h, fill, rx=18, stroke=None, shadow=False, op=1, sw=2):
    s = f" stroke='{stroke}' stroke-width='{sw}'" if stroke else ""
    f = " filter='url(#sh)'" if shadow else ""
    return f"<rect x='{x}' y='{y}' width='{w}' height='{h}' rx='{rx}' fill='{fill}' fill-opacity='{op}'{s}{f}/>"

def circ(x, y, r, fill, stroke=None, sw=3, op=1):
    s = f" stroke='{stroke}' stroke-width='{sw}'" if stroke else ""
    return f"<circle cx='{x}' cy='{y}' r='{r}' fill='{fill}' fill-opacity='{op}'{s}/>"

def path(d, stroke, sw=4, fill="none", dash=None, op=1):
    da = f" stroke-dasharray='{dash}'" if dash else ""
    return (f"<path d='{d}' fill='{fill}' stroke='{stroke}' stroke-width='{sw}' stroke-opacity='{op}' "
            f"stroke-linecap='round' stroke-linejoin='round'{da}/>")

def lines(x, y, widths, color=MUTE, gap=26, h=10):
    return "".join(rect(x, y + i * gap, w, h, color, h // 2) for i, w in enumerate(widths))

def blobs(spec):
    return "".join(circ(x, y, r, c, op=o) for x, y, r, c, o in spec)

def bars(x, y, w, h, vals, color, gap=14, rx=7):
    n = len(vals); bw = (w - gap * (n - 1)) / n
    return "".join(rect(x + i * (bw + gap), y + h * (1 - v), bw, h * v, color, rx) for i, v in enumerate(vals))

def arrow(x1, y1, x2, y2, color, sw=5):
    a = math.atan2(y2 - y1, x2 - x1)
    hx = [(x2 - 16 * math.cos(a - .5), y2 - 16 * math.sin(a - .5)), (x2 - 16 * math.cos(a + .5), y2 - 16 * math.sin(a + .5))]
    return (path(f"M{x1},{y1} L{x2},{y2}", color, sw) +
            path(f"M{hx[0][0]},{hx[0][1]} L{x2},{y2} L{hx[1][0]},{hx[1][1]}", color, sw))

def check(x, y, color, s=1):
    return path(f"M{x-12*s},{y} L{x-3*s},{y+10*s} L{x+14*s},{y-10*s}", color, 5 * s)

def doc_icon(x, y, w, h, fill, accent, fold=True):
    out = rect(x, y, w, h, fill, 14, "#E8DED2", True)
    out += lines(x + 20, y + 28, [w * .55, w * .7, w * .45, w * .62], MUTE, 24, 9)
    out += rect(x + 20, y + h - 40, w * .32, 14, accent, 7)
    return out

def write(name, svg):
    path_ = os.path.join(ROOT, name)
    os.makedirs(os.path.dirname(path_), exist_ok=True)
    open(path_, "w").write(svg)
    print("wrote", os.path.normpath(path_), len(svg))

# 1 ── AI-Powered Insurance Platform (peach): workflow nodes → dashboard ← policy documents
b = blobs([(1300, 160, 260, "#FBD6BD", .6), (260, 840, 280, "#FCE5D7", .9), (800, 980, 150, "#F9CDB0", .5), (1460, 880, 180, "#CFE2CC", .55)])
b += rect(430, 200, 760, 560, "#FFFDF9", 30, "#F1E3D6", True)
b += circ(470, 240, 7, "#F2756A") + circ(494, 240, 7, "#F6C35B") + circ(518, 240, 7, "#8CC58A")
for i in range(4): b += rect(470, 300 + i * 56, 120, 34, "#FDE1D0" if i == 0 else "#F6EFE5", 12)
for i, c in enumerate(["#E6F1E3", "#FDE6D6", "#E4EEFA"]):
    b += rect(630 + i * 180, 290, 164, 96, c, 18) + rect(650 + i * 180, 312, 70, 12, "#B9AEA0", 6, op=.6) + rect(650 + i * 180, 340, 110, 22, "#2A2927", 8, op=.85)
b += rect(630, 410, 340, 310, "#FFFFFF", 20, "#F1E3D6")
for i in range(4): b += path(f"M650,{480 + i * 50} L950,{480 + i * 50}", "#F1E8DC", 2)
b += path("M650,690 L700,640 L750,660 L810,590 L870,610 L950,540", "#EE8A5B", 5) + bars(650, 440, 300, 80, [.3, .5, .4, .7, .6, .9], "#CFE2CC", 12, 5)
b += rect(990, 410, 190, 310, "#FFFFFF", 20, "#F1E3D6") + circ(1085, 520, 56, "none", "#F3EADF", 20)
b += f"<circle cx='1085' cy='520' r='56' fill='none' stroke='#8DBA85' stroke-width='20' stroke-linecap='round' stroke-dasharray='240 400' transform='rotate(-90 1085 520)'/>"
b += lines(1010, 620, [120, 90, 105], MUTE, 28, 10)
# workflow nodes (left)
nodes = [(140, 360, "#FDE6D6"), (260, 250, "#E4EEFA"), (260, 480, "#E6F1E3"), (140, 620, "#FDE1D0")]
for a, c in [(0, 1), (0, 2), (2, 3), (1, 2)]:
    b += path(f"M{nodes[a][0]+30},{nodes[a][1]} C{nodes[a][0]+110},{nodes[a][1]} {nodes[c][0]-80},{nodes[c][1]} {nodes[c][0]},{nodes[c][1]}", "#D6C9B9", 4, dash="2 10")
b += path("M380,250 C420,250 420,320 440,330", "#D6C9B9", 4, dash="2 10") + path("M380,480 C420,480 420,420 440,410", "#D6C9B9", 4, dash="2 10")
for x, y, c in nodes: b += circ(x, y, 46, c, "#FFFFFF", 5) + circ(x, y, 14, "#EE8A5B")
b += check(260, 250, "#3B6FB0", .7) + check(260, 480, "#4F8A4B", .7)
# policy documents (right)
b += "<g transform='rotate(7 1380 560)'>" + doc_icon(1250, 380, 230, 290, "#FFFDF9", "#EE8A5B") + "</g>"
b += "<g transform='rotate(-5 1330 520)'>" + doc_icon(1210, 330, 230, 290, "#FFFFFF", "#8DBA85") + "</g>"
b += f"<path d='M1330,470 l52,18 v52 c0,34 -26,52 -52,66 c-26,-14 -52,-32 -52,-66 v-52z' fill='#FDE1D0' stroke='#EE8A5B' stroke-width='5' stroke-linejoin='round'/>" + check(1330, 540, "#C25A2C", .8)
write("projects/insurance-platform.svg", doc(b, "#FFF4EA"))

# 2 ── Medical Records PDF Viewer (blush): PDF page, markers, data panel, bidirectional sync
b = blobs([(1350, 200, 250, "#F8CFC6", .6), (240, 820, 270, "#FBE0DC", .9), (1450, 840, 200, "#FBD9CE", .55)])
b += rect(120, 150, 760, 700, "#FFFDF9", 30, "#F1DDE2", True)
b += rect(120, 150, 760, 70, "#F8E8EC", 30) + rect(120, 190, 760, 30, "#F8E8EC", 0) + circ(160, 185, 8, "#F2756A") + circ(186, 185, 8, "#F6C35B") + circ(212, 185, 8, "#8CC58A")
for i, w in enumerate([120, 100, 130]): b += rect(480 + i * 120, 168, w - 20, 34, "#FFFFFF", 17)
b += rect(180, 250, 190, 560, "#FBF1F3", 18)
for i in range(4): b += rect(200, 272 + i * 130, 150, 112, "#FFFFFF", 10, "#F1DDE2" if i != 1 else "#E45B43", sw=3 if i == 1 else 2) + lines(212, 292 + i * 130, [90, 110, 70], MUTE, 22, 8)
b += rect(410, 250, 440, 560, "#F4F1EA", 16) + rect(450, 280, 360, 500, "#FFFFFF", 6)
b += lines(480, 320, [300, 260, 310, 240, 300, 280, 310, 250, 290, 270, 300, 220], "#E3DDD0", 38, 11)
b += rect(480, 366, 190, 30, "#FFE08A", 8, op=.7) + rect(480, 518, 250, 30, "#9BE3BF", 8, op=.65) + rect(480, 670, 160, 30, "#FFB3A1", 8, op=.7)
for (x, y, c) in [(700, 381, "#E8A100"), (760, 533, "#2F8F66"), (670, 685, "#E45B43")]:
    b += circ(x, y, 17, "#FFFFFF", c, 4) + circ(x, y, 6, c)
b += "<ellipse cx='620' cy='452' rx='64' ry='30' fill='none' stroke='#E45B43' stroke-width='4' stroke-dasharray='10 8'/>"
# bidirectional sync + cloud + data panel
b += arrow(900, 430, 1020, 430, "#E45B43") + arrow(1020, 520, 900, 520, "#8E8D94")
b += "<g filter='url(#sh)'><path d='M1100,330 a60,60 0 0 1 112,-20 a70,70 0 0 1 112,40 a50,50 0 0 1 -10,100 h-190 a55,55 0 0 1 -24,-120z' fill='#FFFFFF' stroke='#F1DDE2' stroke-width='2'/></g>"
b += rect(1110, 400, 70, 12, "#F4B6C4", 6) + rect(1195, 400, 90, 12, "#E3DDD0", 6)
b += rect(1040, 520, 420, 330, "#FFFDF9", 24, "#F1DDE2", True)
for i, c in enumerate(["#FFE08A", "#9BE3BF", "#FFB3A1"]):
    y = 556 + i * 92
    b += rect(1064, y, 372, 74, "#FBF5F7", 14) + circ(1098, y + 37, 14, c) + rect(1130, y + 20, 150, 12, "#B9AEA0", 6, op=.7) + rect(1130, y + 42, 230, 10, MUTE, 5)
write("projects/medical-pdf-viewer.svg", doc(b, "#FDEEEA"))

# 3 ── OCRHiem (mint): stacked PDFs → pipeline → processed, progress, alert
b = blobs([(1350, 170, 250, "#CFE8D6", .65), (250, 850, 280, "#DDEFE2", .9), (900, 990, 140, "#CFE8D6", .5)])
for i in range(4):
    b += "<g transform='rotate({} 250 520)'>".format(-9 + i * 6) + rect(140 + i * 8, 330 + i * 8, 220, 280, "#FFFFFF", 16, "#CDE5D4", True) + lines(166 + i * 8, 372 + i * 8, [120, 150, 100, 130], "#D6E8DB", 24, 9) + rect(166 + i * 8, 560 + i * 8, 70, 16, "#2F8F66", 8, op=.8) + "</g>"
b += rect(470, 360, 620, 240, "#FFFDF9", 30, "#CDE5D4", True)
b += arrow(380, 480, 468, 480, "#2F8F66")
for i, x in enumerate([520, 700, 880]):
    b += circ(x + 40, 440, 38, ["#E6F4EA", "#CFE8D6", "#BFE3CB"][i], "#FFFFFF", 5) + circ(x + 40, 440, 12, "#2F8F66")
    if i < 2: b += path(f"M{x+86},440 L{x+130},440", "#2F8F66", 4, dash="2 10")
    b += rect(x, 508, 100, 14, "#E1EFE5", 7) + rect(x, 508, 40 + i * 30, 14, "#2F8F66", 7)
b += lines(520, 548, [440], "#E1EFE5", 20, 10)
b += arrow(1100, 480, 1180, 480, "#2F8F66")
b += rect(1190, 360, 260, 240, "#FFFFFF", 24, "#CDE5D4", True) + "<path d='M1226,430 h60 l24,26 h104 v110 h-188z' fill='#BFE3CB' stroke='#2F8F66' stroke-width='4' stroke-linejoin='round'/>" + check(1336, 520, "#1E6B48", .9)
b += rect(470, 650, 620, 190, "#FFFDF9", 24, "#CDE5D4", True)
for i in range(4): b += rect(500, 684 + i * 36, 560, 20, "#F1F8F3", 10) + rect(500, 684 + i * 36, [540, 420, 500, 260][i], 20, ["#BFE3CB", "#BFE3CB", "#F6B79A", "#E1EFE5"][i], 10)
b += "<g filter='url(#sh)'>" + rect(1190, 650, 260, 130, "#FFFFFF", 26, "#F6D3C4") + "</g>"
b += path("M1230,690 c0,-28 40,-28 40,0 v22 l12,14 h-64 l12,-14z", "#E8683F", 5, "#FDE1D0") + circ(1250, 742, 6, "#E8683F") + rect(1304, 698, 110, 12, "#B9AEA0", 6, op=.7) + rect(1304, 724, 80, 10, MUTE, 5)
write("projects/ocrhiem.svg", doc(b, "#EAF6EE"))

# 4 ── Enterprise Application Modernization (blue): old UI → modern component UI
b = blobs([(1340, 180, 250, "#CFE1F6", .65), (240, 850, 270, "#DFECFA", .9), (880, 990, 140, "#CFE1F6", .5)])
b += "<g transform='rotate(-4 380 520)'>" + rect(140, 270, 460, 500, "#EEF0F2", 10, "#CBD2DA", True, sw=3) + rect(140, 270, 460, 54, "#C9D1DB", 10) + rect(140, 300, 460, 24, "#C9D1DB", 0)
b += rect(160, 350, 120, 400, "#DDE2E8", 4) + rect(300, 350, 280, 90, "#DDE2E8", 4) + rect(300, 460, 280, 130, "#E5E9EE", 4) + rect(300, 610, 130, 140, "#DDE2E8", 4) + rect(450, 610, 130, 140, "#DDE2E8", 4)
b += lines(176, 372, [80, 70, 90, 60, 80], "#B9C1CC", 40, 9) + "</g>"
b += arrow(640, 520, 800, 520, "#2D6CDF", 7)
b += rect(860, 230, 600, 580, "#FFFFFF", 30, "#CFDFEF", True) + circ(900, 270, 8, "#F2756A") + circ(924, 270, 8, "#F6C35B") + circ(948, 270, 8, "#8CC58A")
b += rect(890, 310, 540, 56, "#EAF2FC", 28)
for i in range(4): b += rect(906 + i * 130, 322, 110, 32, "#2D6CDF" if i == 1 else "#FFFFFF", 16)
tiles = [(890, 400, 250, 170, "#DFECFA"), (1160, 400, 270, 80, "#E6F1E3"), (1160, 500, 270, 70, "#FDE6D6"), (890, 590, 170, 190, "#FBF1F3"), (1080, 590, 350, 190, "#F0F6FD")]
for x, y, w, h, c in tiles: b += rect(x, y, w, h, c, 18, "#FFFFFF", sw=3)
b += bars(910, 440, 210, 100, [.4, .7, .5, .9, .6], "#5AA0FF", 12, 6) + circ(975, 690, 52, "none", "#DFECFA", 18) + "<circle cx='975' cy='690' r='52' fill='none' stroke='#2D6CDF' stroke-width='18' stroke-linecap='round' stroke-dasharray='220 330' transform='rotate(-90 975 690)'/>"
b += path("M1100,740 L1160,700 L1230,720 L1300,660 L1410,640", "#2D6CDF", 5) + rect(1180, 424, 120, 12, "#B9AEA0", 6, op=.6) + rect(1180, 524, 160, 12, "#B9AEA0", 6, op=.5)
# secure portal shield
b += "<g filter='url(#sh)'><path d='M1380,180 l58,20 v58 c0,38 -29,58 -58,74 c-29,-16 -58,-36 -58,-74 v-58z' fill='#FFFFFF' stroke='#2D6CDF' stroke-width='5' stroke-linejoin='round'/></g>" + rect(1362, 246, 36, 28, "#2D6CDF", 6) + path("M1368,246 v-10 a12,12 0 0 1 24,0 v10", "#2D6CDF", 5)
write("projects/enterprise-modernization.svg", doc(b, "#EAF2FB"))

# 5 ── Risk Score Calculation Platform (yellow): gauge, metrics, analytics
b = blobs([(1330, 180, 250, "#DCD3EE", .6), (260, 840, 270, "#E9E3F4", .9), (900, 990, 140, "#DCD3EE", .5)])
b += rect(150, 190, 1300, 640, "#FFFDF9", 32, "#DED6EC", True)
gx, gy, gr = 500, 560, 220
def arc(a0, a1, col, sw=46):
    p0 = (gx + gr * math.cos(math.radians(a0)), gy + gr * math.sin(math.radians(a0)))
    p1 = (gx + gr * math.cos(math.radians(a1)), gy + gr * math.sin(math.radians(a1)))
    return path(f"M{p0[0]},{p0[1]} A{gr},{gr} 0 0 1 {p1[0]},{p1[1]}", col, sw)
b += arc(180, 250, "#CFE2CC") + arc(256, 304, "#CFC4EA") + arc(310, 360, "#E3A79B")
na = 180 + 180 * .62
b += path(f"M{gx},{gy} L{gx+150*math.cos(math.radians(na))},{gy+150*math.sin(math.radians(na))}", INK, 10) + circ(gx, gy, 22, INK) + circ(gx, gy, 8, "#FFFFFF")
b += rect(330, 640, 340, 20, "#F3EADF", 10) + rect(330, 640, 210, 20, "#7C69B5", 10) + lines(370, 700, [260, 200], MUTE, 30, 12)
for i, (c, w) in enumerate([("#E4EFE6", 220), ("#F6E4DF", 220), ("#E1E8F7", 220)]):
    b += rect(850 + i * 190 if i < 3 else 0, 250, 170, 120, c, 20) + rect(872 + i * 190, 276, 70, 12, "#B9AEA0", 6, op=.6) + rect(872 + i * 190, 310, 100, 26, INK, 9, op=.85)
b += rect(850, 400, 550, 260, "#FFFFFF", 22, "#DED6EC")
for i in range(4): b += path(f"M876,{450 + i * 50} L1374,{450 + i * 50}", "#EFEAF7", 2)
b += bars(880, 440, 230, 190, [.4, .6, .5, .8, .55, .9], "#BFB1E0", 14, 6) + path("M1150,600 L1200,560 L1250,580 L1300,500 L1350,520", "#7C69B5", 5)
b += rect(850, 690, 550, 100, "#FFFFFF", 20, "#DED6EC")
for i in range(3): b += rect(876, 710 + i * 28, 500, 14, "#F1EDF8", 7) + rect(876, 710 + i * 28, [420, 300, 360][i], 14, ["#BFB1E0", "#CFE2CC", "#E7B9B0"][i], 7)
write("projects/risk-score-platform.svg", doc(b, "#F3EFF9"))

# 6 ── SSR Web Application Modernization (sand/terracotta): browser learning UI, page graph, container
b = blobs([(1350, 180, 250, "#F9D8C2", .6), (250, 850, 270, "#DCE9F9", .9), (1450, 880, 190, "#CFE2CC", .5)])
b += rect(120, 190, 860, 620, "#FFFDF9", 30, "#E6D7CC", True) + rect(120, 190, 860, 64, "#FBE6D8", 30) + rect(120, 224, 860, 30, "#FBE6D8", 0)
b += circ(160, 222, 8, "#F2756A") + circ(186, 222, 8, "#F6C35B") + circ(212, 222, 8, "#8CC58A") + rect(260, 204, 500, 36, "#FFFFFF", 18)
b += rect(150, 290, 180, 490, "#F2F6FC", 16)
for i in range(5): b += rect(168, 316 + i * 56, 144, 38, "#F8D6C2" if i == 1 else "#FFFFFF", 12)
b += rect(360, 290, 590, 190, "#DDEAFA", 20) + "<path d='M420,440 v-100 q60,-30 110,0 q50,-30 110,0 v100 q-50,-26 -110,0 q-60,-26 -110,0z' fill='#FFFFFF' stroke='#4C86D6' stroke-width='5' stroke-linejoin='round'/><path d='M530,340 v100' stroke='#4C86D6' stroke-width='4'/>"
b += lines(700, 340, [200, 160, 120], "#9DBCE8", 36, 14) + rect(700, 440, 120, 22, "#4C86D6", 11)
for i in range(3): b += rect(360 + i * 200, 510, 180, 120, ["#FFFFFF", "#F5EDE0", "#FFFFFF"][i], 16, "#E6D7CC") + circ(392 + i * 200, 546, 14, ["#4C86D6", "#8DBA85", "#F0A982"][i]) + lines(380 + i * 200, 580, [120, 90], MUTE, 24, 9)
b += rect(360, 660, 590, 100, "#FFFFFF", 16, "#E6D7CC") + lines(386, 686, [520, 440], MUTE, 30, 11)
# connected pages graph + container
pts = [(1180, 300), (1360, 250), (1450, 400), (1250, 440)]
for a, c in [(0, 1), (1, 2), (0, 3), (3, 2)]: b += path(f"M{pts[a][0]},{pts[a][1]} L{pts[c][0]},{pts[c][1]}", "#B9CDEB", 4, dash="2 10")
b += path("M980,420 C1040,420 1080,330 1120,310", "#4C86D6", 5, dash="2 10")
for x, y in pts: b += rect(x - 52, y - 40, 104, 80, "#FFFFFF", 14, "#E6D7CC", True) + lines(x - 34, y - 18, [60, 44], MUTE, 22, 9) + circ(x + 36, y - 22, 6, "#4C86D6")
b += "<g filter='url(#sh)'><path d='M1160,640 l140,-60 l140,60 v150 l-140,60 l-140,-60z' fill='#FFFFFF' stroke='#4C86D6' stroke-width='5' stroke-linejoin='round'/></g>"
b += path("M1160,640 l140,60 l140,-60 M1300,700 v150", "#4C86D6", 4) + rect(1196, 700, 52, 30, "#F8D6C2", 6) + rect(1196, 744, 52, 30, "#CFE2CC", 6) + rect(1196, 788, 52, 30, "#F9DFA0", 6)
write("projects/ssr-modernization.svg", doc(b, "#FDF3EA"))

# 7 ── About: abstract workspace (laptop, code lines, plant, mug)
W2, H2 = 1240, 1360
b2 = (f"<rect width='{W2}' height='{H2}' fill='#FFF6E3'/>" +
      circ(900, 260, 320, "#F6E7B4", op=.7) + circ(240, 1160, 360, "#CFE2CC", op=.6) + circ(1000, 1180, 220, "#FCE5D7", op=.9) +
      rect(150, 560, 940, 600, "#FFFDF9", 36, "#EFE0B8", True) + rect(210, 620, 820, 460, "#1F2330", 18))
for i, (w, c) in enumerate([(300, "#F4A583"), (420, "#7CC4FF"), (260, "#8DBA85"), (480, "#F6D98A"), (360, "#C9A7FF"), (200, "#F4A583"), (440, "#7CC4FF"), (320, "#8DBA85")]):
    b2 += rect(250 + (60 if i % 3 == 1 else 0), 668 + i * 46, w, 16, c, 8, op=.9)
b2 += rect(90, 1150, 1060, 36, "#E9D9B0", 18) + rect(120, 1180, 1000, 110, "#FFFFFF", 24, "#EFE0B8", op=1)
b2 += rect(920, 1020, 120, 130, "#F7C9B0", 20, "#E9A98A") + path("M1040,1060 q60,20 0,70", "#E9A98A", 10) + path("M950,1000 q-10,-30 10,-50 M990,1000 q-10,-30 10,-50", "#D9CFC2", 8)
b2 += "<path d='M180,1150 c-60,-40 -70,-140 -20,-210 c60,60 70,140 20,210z' fill='#7AA874'/><path d='M180,1150 c10,-90 70,-160 150,-180 c0,90 -50,160 -150,180z' fill='#A4C99C'/><path d='M180,1150 c-20,-100 -10,-200 30,-290 c50,90 40,200 -30,290z' fill='#86B27F'/>"
b2 += path("M250,260 q200,-120 400,-30", INK, 4, dash="2 14") + circ(980, 420, 18, "#E8683F") + circ(1060, 360, 9, "#E8683F", op=.6)
open(os.path.join(ROOT, "about.svg"), "w").write(
    f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {W2} {H2}' width='{W2}' height='{H2}' role='img'><defs><filter id='sh' x='-20%' y='-20%' width='140%' height='155%'><feDropShadow dx='0' dy='14' stdDeviation='16' flood-color='#6b4a33' flood-opacity='.14'/></filter></defs>{b2}</svg>")
print("wrote about.svg")
