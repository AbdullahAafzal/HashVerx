import type { FC } from 'react';
import CustomSoftwareLayout from './CustomSoftwareLayout';
import OdooLayout from './OdooLayout';
import AIAutomationLayout from './AIAutomationLayout';
import DataScrapingLayout from './DataScrapingLayout';
import WebsiteDesignLayout from './WebsiteDesignLayout';
import UIUXDesignLayout from './UIUXDesignLayout';

export const serviceLayouts: Record<string, FC> = {
  'custom-software-development': CustomSoftwareLayout,
  'odoo-erp-services': OdooLayout,
  'ai-seo-automation': AIAutomationLayout,
  'data-scraping-web-crawling': DataScrapingLayout,
  'website-design-development': WebsiteDesignLayout,
  'ui-ux-graphic-video-design': UIUXDesignLayout,
};
