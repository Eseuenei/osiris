# ⚡ ULS APEX — Global Geospatial Intelligence Grid

**Real-Time Telemetry & Global Geospatial Intelligence Platform by Unusual Lab Studios LLC**

ULS APEX is an open-source, feature-rich OSINT dashboard that aggregates real-time tracking data, threat intelligence, and global geospatial insights into one unified, interactive 3D globe interface.

## 🎯 Key Features

### 🛰️ Real-Time Tracking
- **Aircraft** — 10,000+ commercial, private, military flights via ADS-B (adsb.lol)
- **Satellites** — ISS, GPS, communication satellites (celestrak.org, n2yo.com)
- **Maritime** — Live AIS vessel positions worldwide (aisstream.io, marinetraffic)
- **CCTV Cameras** — 1000s of public security cameras (worldwide coverage)

### 📡 Intelligence & Monitoring
- **Earthquakes** — Real-time USGS seismic activity
- **Wildfires** — NASA FIRMS active fire hotspots
- **Weather** — Severe weather alerts & radar
- **Cyber Threats** — CVE tracker, malware intel, attack origins (Cloudflare Radar)
- **News & SIGINT** — RSS aggregation, Telegram OSINT channels
- **Space Weather** — Solar storm & geomagnetic alerts

### 🔧 Reconnaissance Toolkit (RECON)
- **Port Scanning** — Nmap from browser (no installation)
- **DNS Lookup** — A, AAAA, MX, NS, TXT, CNAME records
- **WHOIS Lookup** — Domain registration & owner data
- **SSL/TLS Scan** — Certificate transparency & validation
- **BGP & ASN** — Routing & autonomous system lookup
- **IP Geolocation** — Threat intelligence & reputation
- **Subdomain Enumeration** — Tech stack detection
- **Crypto Wallet Analysis** — BTC/ETH/SOL forensics, OFAC screening

### 🎨 Interface & Tools
- **Interactive 3D Globe** — Rotate, zoom, day/night cycle
- **Dual Projections** — 3D sphere or 2D Mercator map
- **Region Dossier** — On-demand intelligence brief (right-click on map)
- **Drawing & AOI** — Polygon selection, watch alerts for entity changes
- **Custom Layers** — ArcGIS/GeoJSON import
- **Flight Watch** — Track specific aircraft with telemetry
- **Live News** — YouTube stream embedded viewer
- **Navigation** — Real-time routing with turn-by-turn directions
- **AI Analysis** — Google Gemini integration for threat briefing

### 🎯 Keyboard Shortcuts
- `L` — Toggle Layers panel
- `M` — Toggle Markets
- `C` — Toggle Supply Chain (SCM)
- `I` — Toggle Intel Feed
- `S` — Toggle Search
- `R` — Reset map view
- `G` — Toggle Globe/Flat projection
- `F` — Fullscreen mode
- `Ctrl+F` — Global search

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Eseuenei/osiris.git
cd osiris

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d

# Or with just Docker
docker build -t uls-apex .
docker run -p 3000:3000 uls-apex
```

See [DOCKER.md](./DOCKER.md) for full deployment instructions.

## 🔑 Environment Configuration

ULS APEX works **fully without any API keys** using public keyless feeds:
- Aviation: adsb.lol, OpenSky (free with key for higher limits)
- Satellites: celestrak.org, n2yo.com (free with key)
- Maritime: aisstream.io (free with key)
- Earthquakes: USGS (always free)
- Fires: NASA FIRMS (always free)
- Weather: Open-Meteo (always free)
- News: RSS feeds (always free)

**Optional keys for enhanced features:**
- `SCANNER_URL` + `SCANNER_KEY` — Enable RECON scanner backend
- `CLOUDFLARE_API_TOKEN` — Internet outages & attack origins layers
- `GEMINI_API_KEY_1` — AI analysis features
- `ETHERSCAN_API_KEY` — Enhanced Ethereum wallet forensics
- `HELIUS_API_KEY` — Enhanced Solana wallet analysis

See `.env.example` for all available options.

## 📊 Technology Stack

- **Frontend**: Next.js 16+, React 19, TypeScript, Tailwind CSS
- **Mapping**: MapLibre GL, deck.gl, Framer Motion
- **Charting**: Lightweight Charts, Recharts
- **Data**: Socket.io, EventSource (SSE), WebSocket
- **Deployment**: Docker, Vercel, self-hosted
- **Analytics**: Umami (optional)

## 🏗️ Project Structure

```
.
├── src/
│   ├── app/              # Next.js app directory (layouts, pages)
│   ├── components/       # React components (panels, viewers, tools)
│   ├── lib/              # Utilities (data fetching, transforms, map helpers)
│   └── styles/           # Global CSS & Tailwind config
├── public/               # Static assets (images, favicons, data)
├── intel/                # RECON scanner backend (Express.js)
├── engine/               # Advanced processing engines (optional)
├── docs/                 # Documentation
├── docker-compose.yml    # Multi-container deployment
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔒 Security

- **CSP Headers** — Restrictive Content Security Policy
- **HSTS** — Strict-Transport-Security enabled
- **Input Validation** — Client & server-side
- **HTTPS Only** — Enforced in production
- **No Credentials Storage** — Stateless design (except optional API keys)

See [SECURITY.md](./SECURITY.md) for detailed security guidelines.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -m 'Add my feature'`)
4. Push to branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## 📄 License

MIT License — See [LICENSE](./LICENSE) for details.

## 🔗 Links

- **Live Demo**: [ulsapex.live](https://ulsapex.live)
- **Documentation**: [docs/](./docs/)
- **Issues**: [GitHub Issues](https://github.com/Eseuenei/osiris/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Eseuenei/osiris/discussions)

## 🙏 Acknowledgments

- **MapLibre GL** — Open-source mapping library
- **Framer Motion** — Animation library
- **OpenSky, ADS-B Exchange** — Aviation data
- **NASA FIRMS** — Fire detection
- **USGS** — Earthquake data
- **Cloudflare Radar** — Internet intelligence
- **GDELT Project** — Global event monitoring

---

**Built by Unusual Lab Studios LLC**  
Real-Time Telemetry & Global Geospatial Intelligence Platform
