import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import GlobalChatWidget from "./components/GlobalChatWidget";
import PageTransition from "./components/PageTransition";
import KonamiCode from "./components/KonamiCode";
const Index = lazy(() => import("./pages/Index"));
const OneLanding = lazy(() => import("./pages/OneLanding"));
const Home2 = lazy(() => import("./pages/Home2"));
const Pricing = lazy(() => import("./pages/Pricing"));
import AccountLayout from "./components/account/AccountLayout";
const Account = lazy(() => import("./pages/Account"));
const Organization = lazy(() => import("./pages/Organization"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const BillingPage = lazy(() => import("./pages/Billing"));
import { BillingProvider } from "./contexts/BillingContext";
import { AccountProvider } from "./contexts/AccountContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
const PurchaseCredits = lazy(() => import("./pages/PurchaseCredits"));
const BillingPlans = lazy(() => import("./pages/BillingPlans"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const OrganizationProfile = lazy(() => import("./pages/OrganizationProfile"));
const ReferralProgram = lazy(() => import("./pages/ReferralProgram"));
const Usage = lazy(() => import("./pages/Usage"));
const AccountSettings = lazy(() => import("./pages/AccountSettings"));
const Invoices = lazy(() => import("./pages/Invoices"));
const StatusPage = lazy(() => import("./pages/Status"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Referrals = lazy(() => import("./pages/Referrals"));
const OpenSource = lazy(() => import("./pages/OpenSource"));
const Solutions = lazy(() => import("./pages/Solutions"));
const SolutionCapabilities = lazy(() => import("./pages/SolutionCapabilities"));
const SolutionIndustries = lazy(() => import("./pages/SolutionIndustries"));
const Security = lazy(() => import("./pages/Security"));
const ZenOfHanzo = lazy(() => import("./pages/ZenOfHanzo"));
const Zen = lazy(() => import("./pages/Zen"));
const ZenModels = lazy(() => import("./pages/ZenModels"));
const Contact = lazy(() => import("./pages/Contact"));
const Enterprise = lazy(() => import("./pages/Enterprise"));
const Brand = lazy(() => import("./pages/Brand"));
const Press = lazy(() => import("./pages/Press"));

const AI = lazy(() => import("./pages/AI"));
const Datastore = lazy(() => import("./pages/Datastore"));
const Commerce = lazy(() => import("./pages/Commerce"));
const Extension = lazy(() => import("./pages/Extension"));
const Base = lazy(() => import("./pages/Base"));
const Download = lazy(() => import("./pages/Download"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Cloud = lazy(() => import("./pages/Cloud"));
const AIStudio = lazy(() => import("./pages/AIStudio"));
const Operative = lazy(() => import("./pages/Operative"));
const HanzoApp = lazy(() => import("./pages/HanzoApp"));
const HanzoBot = lazy(() => import("./pages/HanzoBot"));
const HanzoCode = lazy(() => import("./pages/HanzoCode"));
const HanzoDev = lazy(() => import("./pages/HanzoDev"));
const Blockchain = lazy(() => import("./pages/Blockchain"));
const HanzoNodes = lazy(() => import("./pages/blockchain/HanzoNodes"));
const HanzoIndexer = lazy(() => import("./pages/blockchain/HanzoIndexer"));
const HanzoWallet = lazy(() => import("./pages/blockchain/HanzoWallet"));
const HanzoSafe = lazy(() => import("./pages/blockchain/HanzoSafe"));
const HanzoID = lazy(() => import("./pages/blockchain/HanzoID"));
const HanzoPay = lazy(() => import("./pages/blockchain/HanzoPay"));
const HanzoBridge = lazy(() => import("./pages/blockchain/HanzoBridge"));
const HanzoDeFi = lazy(() => import("./pages/blockchain/HanzoDeFi"));
const HanzoOracle = lazy(() => import("./pages/blockchain/HanzoOracle"));
const HanzoStorage = lazy(() => import("./pages/blockchain/HanzoStorage"));
const HanzoExplorer = lazy(() => import("./pages/blockchain/HanzoExplorer"));
const HanzoQuest = lazy(() => import("./pages/blockchain/HanzoQuest"));
const Vector = lazy(() => import("./pages/Vector"));
const Payments = lazy(() => import("./pages/Payments"));
const Platform = lazy(() => import("./pages/Platform"));
const Functions = lazy(() => import("./pages/Functions"));
const Identity = lazy(() => import("./pages/Identity"));
const Machines = lazy(() => import("./pages/Machines"));
const Edge = lazy(() => import("./pages/Edge"));
const Realtime = lazy(() => import("./pages/Realtime"));
const Automations = lazy(() => import("./pages/Automations"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Team = lazy(() => import("./pages/Team"));

// New product taxonomy pages
const Products = lazy(() => import("./pages/Products"));
const CategoryPage = lazy(() => import("./pages/products/CategoryPage"));
const ProductPage = lazy(() => import("./pages/products/ProductPage"));
const Integrations = lazy(() => import("./pages/products/Integrations"));

const TeamDev = lazy(() => import("./pages/TeamDev"));
const TeamVi = lazy(() => import("./pages/TeamVi"));
const TeamOpera = lazy(() => import("./pages/TeamOpera"));
const TeamChat = lazy(() => import("./pages/TeamChat"));
const TeamDb = lazy(() => import("./pages/TeamDb"));
import TeamSu from "./pages/TeamSu"; 
const TeamArt = lazy(() => import("./pages/TeamArt"));
const TeamMu = lazy(() => import("./pages/TeamMu"));
const TeamData = lazy(() => import("./pages/TeamData"));
const TeamCore = lazy(() => import("./pages/TeamCore"));
const TeamFin = lazy(() => import("./pages/TeamFin"));
const TeamSec = lazy(() => import("./pages/TeamSec"));
const TeamAlgo = lazy(() => import("./pages/TeamAlgo"));
const TeamDes = lazy(() => import("./pages/TeamDes"));
const TeamMark = lazy(() => import("./pages/TeamMark"));
const TeamCal = lazy(() => import("./pages/TeamCal"));

const AccountRoutes = () => {
  return (
    <AccountProvider>
      <BillingProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/organization-profile" element={<OrganizationProfile />} />
          
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<Account />} />
            <Route path="organization" element={<Organization />} />
            <Route path="billing" element={<BillingPage />} />
            <Route path="purchase-credits" element={<PurchaseCredits />} />
            <Route path="billing-plans" element={<BillingPlans />} />
            <Route path="referrals" element={<ReferralProgram />} />
            <Route path="usage" element={<Usage />} />
            <Route path="settings" element={<AccountSettings />} />
            <Route path="invoices" element={<Invoices />} />
          </Route>
        </Routes>
      </BillingProvider>
    </AccountProvider>
  );
};

const MarketingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OneLanding />} />
      <Route path="/original" element={<Index />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/index" element={<Index />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/status" element={<StatusPage />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/referrals" element={<Referrals />} />
      <Route path="/open-source" element={<OpenSource />} />
      <Route path="/team" element={<Team />} />
      <Route path="/security" element={<Security />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/zen" element={<Zen />} />
      <Route path="/zen/models" element={<ZenModels />} />
      <Route path="/zen-models" element={<ZenModels />} />
      <Route path="/philosophy" element={<ZenOfHanzo />} />
      <Route path="/zen-of-hanzo" element={<ZenOfHanzo />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/press" element={<Press />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/capabilities" element={<SolutionCapabilities />} />
      <Route path="/solutions/industries" element={<SolutionIndustries />} />

      {/* New product taxonomy routes */}
      <Route path="/products" element={<Products />} />
      <Route path="/products/integrations" element={<Integrations />} />
      <Route path="/products/:categoryId" element={<CategoryPage />} />
      <Route path="/products/:categoryId/:productId" element={<ProductPage />} />

      <Route path="/ai" element={<AI />} />
      <Route path="/datastore" element={<Datastore />} />
      <Route path="/commerce" element={<Commerce />} />
      <Route path="/extension" element={<Extension />} />
      <Route path="/base" element={<Base />} />
      <Route path="/download" element={<Download />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/cloud" element={<Cloud />} />
      <Route path="/edge" element={<Edge />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/operative" element={<Operative />} />
      <Route path="/app" element={<HanzoApp />} />
      <Route path="/bot" element={<HanzoBot />} />
      <Route path="/code" element={<HanzoCode />} />
      <Route path="/dev" element={<HanzoDev />} />
      <Route path="/blockchain" element={<Blockchain />} />
      <Route path="/web3" element={<Blockchain />} />
      <Route path="/blockchain/nodes" element={<HanzoNodes />} />
      <Route path="/blockchain/indexer" element={<HanzoIndexer />} />
      <Route path="/blockchain/wallet" element={<HanzoWallet />} />
      <Route path="/blockchain/safe" element={<HanzoSafe />} />
      <Route path="/blockchain/id" element={<HanzoID />} />
      <Route path="/blockchain/pay" element={<HanzoPay />} />
      <Route path="/blockchain/bridge" element={<HanzoBridge />} />
      <Route path="/blockchain/defi" element={<HanzoDeFi />} />
      <Route path="/blockchain/oracle" element={<HanzoOracle />} />
      <Route path="/blockchain/storage" element={<HanzoStorage />} />
      <Route path="/blockchain/explorer" element={<HanzoExplorer />} />
      <Route path="/blockchain/quest" element={<HanzoQuest />} />
      <Route path="/vector" element={<Vector />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/functions" element={<Functions />} />
      <Route path="/identity" element={<Identity />} />
      <Route path="/machines" element={<Machines />} />
      <Route path="/realtime" element={<Realtime />} />
      <Route path="/ai-studio" element={<AIStudio />} />
      <Route path="/automations" element={<Automations />} />
      
      <Route path="/team/dev" element={<TeamDev />} />
      <Route path="/team/vi" element={<TeamVi />} />
      <Route path="/team/opera" element={<TeamOpera />} />
      <Route path="/team/chat" element={<TeamChat />} />
      <Route path="/team/db" element={<TeamDb />} />
      <Route path="/team/su" element={<TeamSu />} />
      <Route path="/team/art" element={<TeamArt />} />
      <Route path="/team/mu" element={<TeamMu />} />
      <Route path="/team/data" element={<TeamData />} />
      <Route path="/team/core" element={<TeamCore />} />
      <Route path="/team/fin" element={<TeamFin />} />
      <Route path="/team/sec" element={<TeamSec />} />
      <Route path="/team/algo" element={<TeamAlgo />} />
      <Route path="/team/des" element={<TeamDes />} />
      <Route path="/team/mark" element={<TeamMark />} />
      <Route path="/team/cal" element={<TeamCal />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const isAccountRoute = (pathname: string) => {
  return pathname.startsWith('/account') || 
    pathname === '/dashboard' || 
    pathname === '/user-profile' || 
    pathname === '/organization-profile';
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        {/* Every page is a lazy chunk, so one boundary at the one place a route
            is chosen covers all 90 of them — a Suspense per <Routes> would be
            the same boundary written twice. The entry chunk carried all 98
            routes before this: opening the homepage downloaded the team pages,
            the account pages and the blockchain pages to render none of them. */}
        <Suspense fallback={null}>
          <PageTransition>
            {isAccountRoute(window.location.pathname) ? (
              <AccountRoutes />
            ) : (
              <MarketingRoutes />
            )}
          </PageTransition>
        </Suspense>
        {/* Global chat widget on all pages */}
        <GlobalChatWidget />
        {/* Easter egg - Konami code for secret menu */}
        <KonamiCode />
      </ThemeProvider>
    </BrowserRouter>
  );
};

// Console message for developers
console.log(`
%c🐉 HERE BE DRAGONS 🐉

%cIf you like compilers, MCP, AI, ML, ZKP, Quantum,
robotics systems, and building the future...

%cWe're hiring! Reach out about working with us:
%chttps://hanzo.ai/careers
%cz@hanzo.ai

%c– Hanzo AI (Techstars '17)
`,
  'font-size: 24px; font-weight: bold; color: #e11633;',
  'font-size: 14px; color: #888;',
  'font-size: 14px; color: #fff;',
  'font-size: 14px; color: #e11633; text-decoration: underline;',
  'font-size: 14px; color: #e11633;',
  'font-size: 12px; color: #666; font-style: italic;'
);

export default App;
