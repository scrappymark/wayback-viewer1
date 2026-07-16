import { config } from './config.js';

let releases = [];
let currentReleaseIndex = -1;

/**
 * Fetch all Wayback imagery releases
 */
export async function fetchReleases() {
  try {
    const response = await fetch(
      `${config.wayback.baseUrl}${config.wayback.releasesEndpoint}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch releases');
    }
    
    const data = await response.json();
    
    // Parse release dates and URLs
    releases = data.map(item => ({
      id: item.id,
      name: item.name,
      url: item.url,
      date: new Date(item.value),
      year: new Date(item.value).getFullYear()
    }));
    
    // Sort by date (newest first)
    releases.sort((a, b) => b.date - a.date);
    
    return releases;
  } catch (error) {
    console.error('Error fetching releases:', error);
    // Return mock data for demo purposes
    releases = generateMockReleases();
    return releases;
  }
}

/**
 * Generate mock releases for demo
 */
function generateMockReleases() {
  const now = new Date();
  const mockData = [];
  
  // Generate releases for the past 5 years
  for (let year = now.getFullYear(); year >= now.getFullYear() - 5; year--) {
    for (let month = 11; month >= 0; month--) {
      const date = new Date(year, month, 28);
      mockData.push({
        id: `release-${year}-${month}`,
        name: `${year}-${String(month + 1).padStart(2, '0')}`,
        url: `${config.wayback.baseUrl}/arcgis/rest/services/World_Imagery/Wayback${year}${String(month + 1).padStart(2, '0')}/MapServer`,
        date: date,
        year: year
      });
    }
  }
  
  return mockData;
}

/**
 * Get releases grouped by year
 */
export function getReleasesByYear() {
  const grouped = {};
  
  releases.forEach(release => {
    if (!grouped[release.year]) {
      grouped[release.year] = [];
    }
    grouped[release.year].push(release);
  });
  
  // Sort years descending
  const sortedYears = Object.keys(grouped).sort((a, b) => b - a);
  
  return {
    years: sortedYears,
    grouped: grouped
  };
}

/**
 * Get current release
 */
export function getCurrentRelease() {
  if (currentReleaseIndex >= 0 && currentReleaseIndex < releases.length) {
    return releases[currentReleaseIndex];
  }
  return null;
}

/**
 * Set current release by index
 */
export function setCurrentRelease(index) {
  if (index >= 0 && index < releases.length) {
    currentReleaseIndex = index;
    return releases[index];
  }
  return null;
}

/**
 * Get next release
 */
export function getNextRelease() {
  if (currentReleaseIndex > 0) {
    currentReleaseIndex--;
    return releases[currentReleaseIndex];
  }
  return null;
}

/**
 * Get previous release
 */
export function getPreviousRelease() {
  if (currentReleaseIndex < releases.length - 1) {
    currentReleaseIndex++;
    return releases[currentReleaseIndex];
  }
  return null;
}

/**
 * Get release by ID
 */
export function getReleaseById(id) {
  const index = releases.findIndex(r => r.id === id);
  if (index !== -1) {
    currentReleaseIndex = index;
    return releases[index];
  }
  return null;
}

/**
 * Get metadata for a release
 */
export function getReleaseMetadata(release) {
  if (!release) return null;
  
  return {
    id: release.id,
    name: release.name,
    releaseDate: release.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    provider: 'Maxar Technologies',
    resolution: '30 cm',
    captureDate: release.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
}

/**
 * Check if there's a next release
 */
export function hasNextRelease() {
  return currentReleaseIndex > 0;
}

/**
 * Check if there's a previous release
 */
export function hasPreviousRelease() {
  return currentReleaseIndex < releases.length - 1;
}

/**
 * Get total number of releases
 */
export function getTotalReleases() {
  return releases.length;
}

/**
 * Clear releases
 */
export function clearReleases() {
  releases = [];
  currentReleaseIndex = -1;
}
