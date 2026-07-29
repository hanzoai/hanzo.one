import { Anchor, Badge, Box, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Grid, H1, H2, H3, H4, Input, MotionBox, Paragraph, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, Text, XStack, YStack } from '@/gui'
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Grid3X3,
  List,
  ChevronDown,
  X,
  Filter,
  ExternalLink,
  BookOpen,
  Github,
  GraduationCap,
  Rocket,
  Package,
  Check,
} from 'lucide-react';


import {
  ossCatalog,
  featuredCollections,
  repoTypes,
  categories,
  languages,
  useCases,
  maturityLevels,
  deploymentTypes,
  sortOptions,
  filterRepos,
  sortByHot,
  sortByRecent,
  type OSSRepo,
  type RepoType,
  type Maturity,
  type DeploymentType,
  type FeaturedCollection,
} from '@/data/oss-catalog';

const BRAND_COLOR = 'var(--foreground)';

// =============================================================================
// QUICK FILTER CHIPS
// =============================================================================

const quickFilters = [
  { value: 'all', label: 'All' },
  { value: 'core', label: 'Core' },
  { value: 'template', label: 'Templates' },
  { value: 'example', label: 'Examples' },
  { value: 'connector', label: 'Connectors' },
  { value: 'mcp', label: 'MCP' },
  { value: 'sdk', label: 'SDKs' },
];

// =============================================================================
// REPO CARD COMPONENT
// =============================================================================

interface RepoCardProps {
  repo: OSSRepo;
  view: 'grid' | 'list';
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, view }) => {
  const Icon = repo.icon;

  const primaryAction = repo.signals.deployable && repo.actions.deployUrl
    ? { label: 'Deploy', url: repo.actions.deployUrl, icon: Rocket }
    : repo.type === 'template'
    ? { label: 'Use Template', url: repo.actions.githubUrl, icon: Package }
    : null;

  if (view === 'list') {
    return (
      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        flexDirection="row" display="flex" alignItems="center" gap={16} padding={16} borderRadius="var(--radius-lg)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ borderColor: "var(--neutral-700)" }}
      >
        {/* Icon */}
        <XStack width={40} height={40} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
          {Icon && <Icon width={20} height={20} color="var(--neutral-400)" />}
        </XStack>

        {/* Content */}
        <Box flex={1} minWidth={0}>
          <XStack display="flex" alignItems="center" gap={8} marginBottom={4}>
            <H3 fontWeight="600" color="var(--foreground)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{repo.name}</H3>
            {repo.signals.featured && (
              <Badge variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                Featured
              </Badge>
            )}
          </XStack>
          <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{repo.description}</Paragraph>
        </Box>

        {/* Badges */}
        <Box display="none" alignItems="center" gap={8} $md={{ display: "flex" }}>
          {repo.languages.slice(0, 2).map(lang => (
            <Badge key={lang} variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor="var(--neutral-800)" color="var(--neutral-400)" borderColor="var(--neutral-700)">
              {lang}
            </Badge>
          ))}
        </Box>

        {/* Actions */}
        <XStack display="flex" alignItems="center" gap={8}>
          {primaryAction && (
            <Button size="sm" backgroundColor="var(--neutral-800)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }} asChild>
              <a href={primaryAction.url} target="_blank" rel="noopener noreferrer">
                {primaryAction.label}
              </a>
            </Button>
          )}
          <Button size="sm" variant="ghost" color="var(--neutral-400)" hoverStyle={{ color: "var(--foreground)" }} asChild>
            <a href={repo.actions.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
            </a>
          </Button>
        </XStack>
      </MotionBox>
    );
  }

  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      group display="flex" flexDirection="column" borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" overflow="hidden" hoverStyle={{ borderColor: "var(--neutral-700)" }}
    >
      {/* Header */}
      <Box padding={20} paddingBottom={12}>
        <XStack display="flex" alignItems="flex-start" justifyContent="space-between" marginBottom={12}>
          <XStack width={40} height={40} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center">
            {Icon && <Icon width={20} height={20} color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} />}
          </XStack>
          <XStack display="flex" gap={6}>
            {repo.signals.featured && (
              <Badge variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                Featured
              </Badge>
            )}
            {repo.signals.recommended && !repo.signals.featured && (
              <Badge variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                Recommended
              </Badge>
            )}
            <Badge variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
              {repo.maturity.charAt(0).toUpperCase() + repo.maturity.slice(1)}
            </Badge>
          </XStack>
        </XStack>

        <H3 fontWeight="600" color="var(--foreground)" marginBottom={4} transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
          {repo.name}
        </H3>
        <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" fontFamily="var(--font-mono)" marginBottom={8}>{repo.slug}</Paragraph>
        <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)" WebkitLineClamp={2} display="-webkit-box" WebkitBoxOrient="vertical" overflow="hidden">{repo.description}</Paragraph>
      </Box>

      {/* Metadata */}
      <XStack paddingHorizontal={20} paddingBottom={12} display="flex" flexWrap="wrap" gap={6}>
        {repo.languages.slice(0, 3).map(lang => (
          <Badge key={lang} variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor="var(--surface-card-emphasis)" color="var(--neutral-400)" borderColor="var(--neutral-700)">
            {lang}
          </Badge>
        ))}
        {repo.categories.slice(0, 1).map(cat => (
          <Badge key={cat} variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor="var(--surface-card-emphasis)" color="var(--neutral-500)" borderColor="var(--neutral-700)">
            {cat}
          </Badge>
        ))}
        {repo.signals.deployable && (
          <Badge variant="outline" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" borderColor="var(--border-strong)">
            Deployable
          </Badge>
        )}
      </XStack>

      {/* Upstream Attribution */}
      {repo.upstream && (
        <Box paddingHorizontal={20} paddingBottom={12}>
          <Anchor tap
            href={repo.upstream.url}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-600)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" hoverStyle={{ color: "var(--neutral-400)" }}
          >
            Powered by {repo.upstream.name} →
          </Anchor>
        </Box>
      )}

      {/* Actions */}
      <XStack marginTop="auto" padding={16} paddingTop={12} borderTopWidth={1} borderColor="var(--neutral-800)" display="flex" alignItems="center" gap={8}>
        {primaryAction ? (
          <Button size="sm" flex={1} backgroundColor="var(--neutral-800)" color="var(--foreground)" hoverStyle={{ backgroundColor: "var(--surface-card-emphasis)" }} asChild>
            <a href={primaryAction.url} target="_blank" rel="noopener noreferrer">
              <primaryAction.icon width={14} height={14} marginRight={6} />
              {primaryAction.label}
            </a>
          </Button>
        ) : (
          <Button size="sm" variant="outline" flex={1} borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }} asChild>
            <a href={repo.actions.githubUrl} target="_blank" rel="noopener noreferrer">
              <Box render="span" display="inline-flex" alignItems="center" marginRight={6}><Github size={14} /></Box>
              View Source
            </a>
          </Button>
        )}

        <XStack display="flex" gap={4}>
          {repo.actions.docsUrl && (
            <Button size="sm" variant="ghost" paddingHorizontal={8} color="var(--neutral-400)" hoverStyle={{ color: "var(--foreground)" }} asChild title="Docs">
              <a href={repo.actions.docsUrl} target="_blank" rel="noopener noreferrer">
                <BookOpen size={16} />
              </a>
            </Button>
          )}
          {repo.actions.learnUrl && (
            <Button size="sm" variant="ghost" paddingHorizontal={8} color="var(--neutral-400)" hoverStyle={{ color: "var(--foreground)" }} asChild title="Learn">
              <a href={repo.actions.learnUrl}>
                <GraduationCap size={16} />
              </a>
            </Button>
          )}
          {primaryAction && (
            <Button size="sm" variant="ghost" paddingHorizontal={8} color="var(--neutral-400)" hoverStyle={{ color: "var(--foreground)" }} asChild title="GitHub">
              <a href={repo.actions.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
              </a>
            </Button>
          )}
        </XStack>
      </XStack>
    </MotionBox>
  );
};

// =============================================================================
// FEATURED COLLECTION CARD
// =============================================================================

interface CollectionCardProps {
  collection: FeaturedCollection;
  onSelect: (repoIds: string[]) => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection, onSelect }) => {
  const Icon = collection.icon;

  return (
    <XStack minHeight={44}
      onClick={() => onSelect(collection.repos)}
      render="button" group display="flex" alignItems="center" gap={12} padding={16} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)" transition="all var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" textAlign="left" hoverStyle={{ borderColor: "var(--border-strong)", backgroundColor: "var(--surface-card)" }}
    >
      <XStack width={40} height={40} borderRadius="var(--radius-lg)" backgroundColor="var(--neutral-800)" display="flex" alignItems="center" justifyContent="center" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ backgroundColor: "rgb(255 255 255 / 0.1)" }}>
        <Icon width={20} height={20} color="var(--neutral-400)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }} />
      </XStack>
      <div>
        <H4 fontWeight="500" color="var(--foreground)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" $group-hover={{ color: "var(--foreground)" }}>
          {collection.title}
        </H4>
        <Paragraph fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)">{collection.description}</Paragraph>
      </div>
    </XStack>
  );
};

// =============================================================================
// FACET SECTION
// =============================================================================

interface FacetSectionProps {
  title: string;
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (values: string[]) => void;
  collapsed?: boolean;
}

const FacetSection: React.FC<FacetSectionProps> = ({
  title,
  options,
  selected,
  onChange,
  collapsed = false,
}) => {
  const [isOpen, setIsOpen] = useState(!collapsed);

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(v => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <Box borderBottomWidth={1} borderColor="var(--neutral-800)" paddingBottom={16} marginBottom={16}>
      <XStack minHeight={44}
        onClick={() => setIsOpen(!isOpen)}
        render="button" display="flex" alignItems="center" justifyContent="space-between" width="100%" textAlign="left" marginBottom={8}
      >
        <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-300)">{title}</Text>
        <ChevronDown
          size={16} color="var(--neutral-500)"
        />
      </XStack>
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            rowGap={4} overflow="hidden"
          >
            {options.map(option => (
              <XStack minHeight={44}
                key={option.value}
                onClick={() => toggleOption(option.value)}
                render="button" display="flex" alignItems="center" gap={8} width="100%" paddingHorizontal={8} paddingVertical={6} borderRadius="var(--radius)" fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" transition="color, background-color, border-color, fill, stroke var(--duration-fast, 150ms) var(--ease-in-out, cubic-bezier(.4,0,.2,1))" backgroundColor={selected.includes(option.value) ? "rgb(255 255 255 / 0.1)" : undefined} color={selected.includes(option.value) ? "var(--foreground)" : "var(--neutral-400)"} hoverStyle={selected.includes(option.value) ? undefined : { backgroundColor: "var(--neutral-800)", color: "var(--foreground)" }}
              >
                <XStack
                  width={16} height={16} borderRadius="var(--radius)" borderWidth={1} display="flex" alignItems="center" justifyContent="center" borderColor={selected.includes(option.value) ? "var(--foreground)" : "var(--neutral-600)"} backgroundColor={selected.includes(option.value) ? "var(--foreground)" : undefined}
                >
                  {selected.includes(option.value) && (
                    <Check size={12} color="var(--foreground)" />
                  )}
                </XStack>
                {option.label}
              </XStack>
            ))}
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

// =============================================================================
// MAIN CATALOG COMPONENT
// =============================================================================

const OSSCatalog: React.FC = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [quickFilter, setQuickFilter] = useState('all');
  const [sortBy, setSortBy] = useState('hot');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([]);
  const [selectedMaturity, setSelectedMaturity] = useState<string[]>([]);
  const [selectedDeployment, setSelectedDeployment] = useState<string[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string[] | null>(null);

  // Filter and sort repos
  const filteredRepos = useMemo(() => {
    let repos = ossCatalog;

    // Collection filter
    if (selectedCollection) {
      repos = repos.filter(r => selectedCollection.includes(r.id));
    }

    // Quick filter
    if (quickFilter !== 'all') {
      repos = repos.filter(r => r.type === quickFilter);
    }

    // Facet filters
    repos = filterRepos(repos, {
      types: selectedTypes.length ? selectedTypes as RepoType[] : undefined,
      categories: selectedCategories.length ? selectedCategories : undefined,
      languages: selectedLanguages.length ? selectedLanguages : undefined,
      useCases: selectedUseCases.length ? selectedUseCases : undefined,
      maturity: selectedMaturity.length ? selectedMaturity as Maturity[] : undefined,
      deployment: selectedDeployment.length ? selectedDeployment as DeploymentType[] : undefined,
      search: searchQuery || undefined,
    });

    // Sort
    switch (sortBy) {
      case 'hot':
        return sortByHot(repos);
      case 'recent':
        return sortByRecent(repos);
      case 'beginner':
        return [...repos].sort((a, b) => {
          const aScore = (a.type === 'template' ? 2 : 0) + (a.maturity === 'stable' ? 1 : 0);
          const bScore = (b.type === 'template' ? 2 : 0) + (b.maturity === 'stable' ? 1 : 0);
          return bScore - aScore;
        });
      case 'name':
        return [...repos].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sortByHot(repos);
    }
  }, [
    searchQuery,
    quickFilter,
    sortBy,
    selectedTypes,
    selectedCategories,
    selectedLanguages,
    selectedUseCases,
    selectedMaturity,
    selectedDeployment,
    selectedCollection,
  ]);

  const featuredRepos = useMemo(() => {
    if (selectedCollection || searchQuery || quickFilter !== 'all') return [];
    return filteredRepos.filter(r => r.signals.featured).slice(0, 6);
  }, [filteredRepos, selectedCollection, searchQuery, quickFilter]);

  const mainRepos = useMemo(() => {
    if (featuredRepos.length === 0) return filteredRepos;
    const featuredIds = new Set(featuredRepos.map(r => r.id));
    return filteredRepos.filter(r => !featuredIds.has(r.id));
  }, [filteredRepos, featuredRepos]);

  const hasActiveFilters =
    selectedTypes.length > 0 ||
    selectedCategories.length > 0 ||
    selectedLanguages.length > 0 ||
    selectedUseCases.length > 0 ||
    selectedMaturity.length > 0 ||
    selectedDeployment.length > 0;

  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedCategories([]);
    setSelectedLanguages([]);
    setSelectedUseCases([]);
    setSelectedMaturity([]);
    setSelectedDeployment([]);
    setSelectedCollection(null);
    setQuickFilter('all');
    setSearchQuery('');
  };

  // Facet rail content
  const FacetRail = () => (
    <Box rowGap={16}>
      <FacetSection
        title="Type"
        options={repoTypes.map(t => ({ value: t.value, label: t.label }))}
        selected={selectedTypes}
        onChange={setSelectedTypes}
      />
      <FacetSection
        title="Category"
        options={categories.map(c => ({ value: c, label: c }))}
        selected={selectedCategories}
        onChange={setSelectedCategories}
      />
      <FacetSection
        title="Language"
        options={languages.map(l => ({ value: l, label: l }))}
        selected={selectedLanguages}
        onChange={setSelectedLanguages}
      />
      <FacetSection
        title="Use Case"
        options={useCases.map(u => ({ value: u, label: u }))}
        selected={selectedUseCases}
        onChange={setSelectedUseCases}
        collapsed
      />
      <FacetSection
        title="Maturity"
        options={maturityLevels.map(m => ({ value: m.value, label: m.label }))}
        selected={selectedMaturity}
        onChange={setSelectedMaturity}
        collapsed
      />
      <FacetSection
        title="Deployment"
        options={deploymentTypes.map(d => ({ value: d.value, label: d.label }))}
        selected={selectedDeployment}
        onChange={setSelectedDeployment}
        collapsed
      />
    </Box>
  );

  return (
    <Box render="section" paddingVertical={64} paddingHorizontal={16} backgroundColor="var(--pure-black)" minHeight="100vh" $md={{ paddingHorizontal: 32 }}>
      <Box maxWidth="var(--container-max)" marginHorizontal="auto">
        {/* Header */}
        <Box marginBottom={32}>
          <H1 fontSize="var(--text-3xl)" lineHeight="var(--leading-3xl)" fontWeight="700" color="var(--foreground)" marginBottom={12} $md={{ fontSize: "var(--text-4xl)", lineHeight: "var(--leading-4xl)" }}>
            OSS Catalog
          </H1>
          <Paragraph color="var(--neutral-400)" fontSize="var(--text-lg)" lineHeight="var(--leading-lg)">
            Open source tools, templates, and infrastructure for building AI applications
          </Paragraph>
        </Box>

        {/* Featured Collections */}
        {!selectedCollection && !searchQuery && quickFilter === 'all' && (
          <Box marginBottom={40}>
            <H2 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em" marginBottom={16}>
              Quick Start Collections
            </H2>
            <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={16} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              {featuredCollections.map(collection => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  onSelect={setSelectedCollection}
                />
              ))}
            </Grid>
          </Box>
        )}

        {/* Top Bar */}
        <YStack display="flex" flexDirection="column" gap={16} marginBottom={24} $lg={{ flexDirection: "row" }}>
          {/* Search */}
          <Box position="relative" flex={1}>
            <Box render="span" display="inline-flex" alignItems="center" position="absolute" left={12} top="50%" y="-50%"><Search size={16} color="var(--neutral-500)" /></Box>
            <Input
              type="text"
              placeholder="Search repos, templates, tools..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              paddingLeft={40} backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)" focusStyle={{ borderColor: "var(--border-strong)" }}
            />
          </Box>

          {/* Quick Filters */}
          <XStack display="flex" gap={8} overflowX="auto" paddingBottom={8} $lg={{ paddingBottom: 0 }}>
            {quickFilters.map(filter => (
              <Button
                key={filter.value}
                variant={quickFilter === filter.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setQuickFilter(filter.value);
                  setSelectedCollection(null);
                }}
                whiteSpace="nowrap" backgroundColor={quickFilter === filter.value ? "var(--foreground)" : undefined} color={quickFilter === filter.value ? "var(--foreground)" : undefined} borderColor={quickFilter === filter.value ? undefined : "var(--neutral-700)"} hoverStyle={quickFilter === filter.value ? { backgroundColor: "var(--surface-card-emphasis)" } : { backgroundColor: "var(--neutral-800)" }}
              >
                {filter.label}
              </Button>
            ))}
          </XStack>

          {/* Sort & View */}
          <XStack display="flex" gap={8}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}>
                  {sortOptions.find(s => s.value === sortBy)?.label || 'Sort'}
                  <Box render="span" display="inline-flex" alignItems="center" marginLeft={8}><ChevronDown size={16} /></Box>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)">
                {sortOptions.map(option => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    cursor="pointer" color={sortBy === option.value ? "var(--foreground)" : undefined}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <XStack display="flex" borderWidth={1} borderColor="var(--neutral-700)" borderRadius="var(--radius-md)">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setView('grid')}
                paddingHorizontal={8} backgroundColor={view === 'grid' ? "var(--neutral-800)" : undefined}
              >
                <Grid3X3 size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setView('list')}
                paddingHorizontal={8} backgroundColor={view === 'list' ? "var(--neutral-800)" : undefined}
              >
                <List size={16} />
              </Button>
            </XStack>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" borderColor="var(--neutral-700)" $lg={{ display: "none" }}>
                  <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Filter size={16} /></Box>
                  Filters
                  {hasActiveFilters && (
                    <Text marginLeft={8} width={20} height={20} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" color="var(--foreground)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" display="flex" alignItems="center" justifyContent="center">
                      {selectedTypes.length + selectedCategories.length + selectedLanguages.length}
                    </Text>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" height="80vh" backgroundColor="var(--neutral-900)" borderColor="var(--neutral-800)">
                <SheetHeader>
                  <SheetTitle color="var(--foreground)">Filters</SheetTitle>
                </SheetHeader>
                <Box marginTop={24} overflowY="auto" height="100%" paddingBottom={80}>
                  <FacetRail />
                </Box>
              </SheetContent>
            </Sheet>
          </XStack>
        </YStack>

        {/* Active Filters */}
        {(hasActiveFilters || selectedCollection) && (
          <XStack display="flex" flexWrap="wrap" alignItems="center" gap={8} marginBottom={24}>
            <Text fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">Active filters:</Text>
            {selectedCollection && (
              <Badge variant="outline" backgroundColor="rgb(255 255 255 / 0.1)" color="var(--foreground)" borderColor="var(--border-strong)">
                Collection
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44} onClick={() => setSelectedCollection(null)} render="button" marginLeft={4}>
                  <X size={12} />
                </Box>
              </Badge>
            )}
            {[...selectedTypes, ...selectedCategories, ...selectedLanguages].slice(0, 5).map(filter => (
              <Badge key={filter} variant="outline" backgroundColor="var(--neutral-800)" color="var(--neutral-300)" borderColor="var(--neutral-700)">
                {filter}
                <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                  onClick={() => {
                    setSelectedTypes(selectedTypes.filter(t => t !== filter));
                    setSelectedCategories(selectedCategories.filter(c => c !== filter));
                    setSelectedLanguages(selectedLanguages.filter(l => l !== filter));
                  }}
                  render="button" marginLeft={4}
                >
                  <X size={12} />
                </Box>
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              color="var(--neutral-400)" hoverStyle={{ color: "var(--foreground)" }}
            >
              Clear all
            </Button>
          </XStack>
        )}

        {/* Main Content */}
        <XStack display="flex" gap={32}>
          {/* Facet Rail - Desktop */}
          <Box render="aside" display="none" width={256} flexShrink={0} $lg={{ display: "block" }}>
            <Box position="sticky" top={96} padding={16} borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="var(--surface-card-emphasis)">
              <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
                <H3 fontWeight="500" color="var(--foreground)">Filters</H3>
                {hasActiveFilters && (
                  <Box display="inline-flex" alignItems="center" justifyContent="center" minHeight={44}
                    onClick={clearAllFilters}
                    render="button" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)" color="var(--neutral-500)" hoverStyle={{ color: "var(--foreground)" }}
                  >
                    Clear all
                  </Box>
                )}
              </XStack>
              <FacetRail />
            </Box>
          </Box>

          {/* Results */}
          <Box flex={1} minWidth={0}>
            {/* Results Count */}
            <XStack display="flex" alignItems="center" justifyContent="space-between" marginBottom={16}>
              <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-500)">
                {filteredRepos.length} {filteredRepos.length === 1 ? 'result' : 'results'}
              </Paragraph>
            </XStack>

            {/* Featured Row */}
            {featuredRepos.length > 0 && (
              <Box marginBottom={32}>
                <H2 fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" fontWeight="500" color="var(--neutral-400)" textTransform="uppercase" letterSpacing="0.05em" marginBottom={16} display="flex" alignItems="center" gap={8}>
                  <Text width={8} height={8} borderRadius="var(--radius-full)" backgroundColor="var(--neutral-800)" />
                  Hanzo Picks
                </H2>
                <Grid
                  display={view === 'grid' ? "grid" : undefined} gridTemplateColumns={view === 'grid' ? "repeat(1, minmax(0, 1fr))" : undefined} gap={view === 'grid' ? 16 : undefined} rowGap={view === 'grid' ? undefined : 12} $md={view === 'grid' ? { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" } : undefined} $xl={view === 'grid' ? { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" } : undefined}
                >
                  {featuredRepos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} view={view} />
                  ))}
                </Grid>
              </Box>
            )}

            {/* Main Results */}
            {mainRepos.length > 0 ? (
              <Grid
                display={view === 'grid' ? "grid" : undefined} gridTemplateColumns={view === 'grid' ? "repeat(1, minmax(0, 1fr))" : undefined} gap={view === 'grid' ? 16 : undefined} rowGap={view === 'grid' ? undefined : 12} $md={view === 'grid' ? { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" } : undefined} $xl={view === 'grid' ? { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" } : undefined}
              >
                {mainRepos.map(repo => (
                  <RepoCard key={repo.id} repo={repo} view={view} />
                ))}
              </Grid>
            ) : (
              <Box textAlign="center" paddingVertical={64}>
                <Paragraph color="var(--neutral-500)" marginBottom={16}>No results found</Paragraph>
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear filters
                </Button>
              </Box>
            )}
          </Box>
        </XStack>
      </Box>
    </Box>
  );
};

export default OSSCatalog;
