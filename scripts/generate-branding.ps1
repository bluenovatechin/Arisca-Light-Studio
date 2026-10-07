Add-Type -AssemblyName System.Drawing

$brandingDir = "f:\BlueNova\Arisca\public\assets\branding"
$publicDir = "f:\BlueNova\Arisca\public"
$emblemPath = Join-Path $brandingDir "arisca-1-mxB29pjQy0T31J2j.png"
$logoPath = Join-Path $brandingDir "arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png"

# 1. Generate Favicons: 48x48, 96x96, 144x144, 192x192 from emblem
$sizes = @(48, 96, 144, 192)
$emblemImg = [System.Drawing.Image]::FromFile($emblemPath)

foreach ($s in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap $s, $s
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($emblemImg, 0, 0, $s, $s)
    $outPath = Join-Path $brandingDir "favicon-$s.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Created $outPath"
}

# 2. Create public/favicon.ico (48x48 icon format)
$fav48Path = Join-Path $brandingDir "favicon-48.png"
$fav48Img = [System.Drawing.Bitmap]::FromFile($fav48Path)
$iconHandle = $fav48Img.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($iconHandle)
$icoOut = Join-Path $publicDir "favicon.ico"
$stream = New-Object System.IO.FileStream $icoOut, ([System.IO.FileMode]::Create)
$icon.Save($stream)
$stream.Close()
$fav48Img.Dispose()
Write-Output "Created $icoOut"

# 3. Create Google Knowledge Panel Logo (512x512 on clean solid white/off-white background)
$gLogoBmp = New-Object System.Drawing.Bitmap 512, 512
$gG = [System.Drawing.Graphics]::FromImage($gLogoBmp)
$gG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gG.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gG.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gG.Clear([System.Drawing.Color]::White)
# Draw emblem with 40px padding
$gG.DrawImage($emblemImg, 32, 32, 448, 448)
$gLogoOut = Join-Path $brandingDir "google-logo-512.png"
$gLogoBmp.Save($gLogoOut, [System.Drawing.Imaging.ImageFormat]::Png)
$gG.Dispose()
$gLogoBmp.Dispose()
Write-Output "Created $gLogoOut"

# 4. Create 1200x630 Open Graph Share Card (og-banner.png & og-banner.jpg)
$bannerW = 1200
$bannerH = 630
$bannerBmp = New-Object System.Drawing.Bitmap $bannerW, $bannerH
$bg = [System.Drawing.Graphics]::FromImage($bannerBmp)
$bg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$bg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$bg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$bg.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

# Clean solid luxury background (#0e1112 dark studio background with subtle warm gradient or #fbfbfa)
# Let's create a rich, elegant studio card: #fdfdfc with crisp teal #14958f and dark graphite accents
$bg.Clear([System.Drawing.Color]::FromArgb(253, 253, 252))

# Top decorative luxury accent bar
$accentBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(20, 149, 143)) # #14958f
$goldBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(197, 160, 89))   # #c5a059
$bg.FillRectangle($accentBrush, 0, 0, $bannerW, 8)

# Subtle border
$borderPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(235, 235, 232), 2)
$bg.DrawRectangle($borderPen, 1, 1, $bannerW - 2, $bannerH - 2)

# Load horizontal logo
$logoImg = [System.Drawing.Image]::FromFile($logoPath)
# Logo aspect ratio is 938x469 (2:1). Let's draw it centered, width = 640, height = 320
$logoW = 600
$logoH = 300
$logoX = [int](($bannerW - $logoW) / 2)
$logoY = 80
$bg.DrawImage($logoImg, $logoX, $logoY, $logoW, $logoH)

# Draw Subtitle & Tagline
$titleFont = New-Object System.Drawing.Font ("Segoe UI", [float]22, [System.Drawing.FontStyle]::Bold)
$subFont = New-Object System.Drawing.Font ("Segoe UI", [float]15, [System.Drawing.FontStyle]::Regular)
$locFont = New-Object System.Drawing.Font ("Segoe UI", [float]14, [System.Drawing.FontStyle]::Bold)

$textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(35, 38, 40))
$mutedBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(100, 108, 112))

$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center

# Draw Tagline
$bg.DrawString("PREMIUM ARCHITECTURAL & DESIGNER LIGHTING", $titleFont, $accentBrush, [float]($bannerW / 2), 405.0, $sf)
$bg.DrawString("Anti-Glare LOFY COB Downlights  |  Luxury Chandeliers  |  Pendants  |  Bespoke Lighting", $subFont, $textBrush, [float]($bannerW / 2), 452.0, $sf)

# Draw Location & Contact Pill
$pillBg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(244, 248, 248))
$pillPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(20, 149, 143), 1)
$pillRect = New-Object System.Drawing.Rectangle 230, 515, 740, 48
$bg.FillRectangle($pillBg, $pillRect)
$bg.DrawRectangle($pillPen, $pillRect)
$bg.DrawString("Studio: Jagatpur Road, Ahmedabad   *   WhatsApp: +91 98980 86656", $locFont, $accentBrush, [float]($bannerW / 2), 527.0, $sf)

$bannerPng = Join-Path $brandingDir "og-banner.png"
$bannerJpg = Join-Path $brandingDir "og-banner.jpg"
$bannerBmp.Save($bannerPng, [System.Drawing.Imaging.ImageFormat]::Png)

# For JPEG, save with high quality
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, 92L)
$bannerBmp.Save($bannerJpg, $codec, $encoderParams)

$bg.Dispose()
$bannerBmp.Dispose()
$emblemImg.Dispose()
$logoImg.Dispose()

Write-Output "Created $bannerPng and $bannerJpg"
