import { load } from 'js-yaml';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { LinksConfig } from '../types/config';
import yml from '../config/links.yaml';

export function getDynamicConfig(): LinksConfig {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const configPath = join(__dirname, '../config/links.yaml');
    const configFile = readFileSync(configPath, 'utf8');
    return load(configFile) as LinksConfig;
}

export function getConfig(): LinksConfig {
    return yml as LinksConfig;
}