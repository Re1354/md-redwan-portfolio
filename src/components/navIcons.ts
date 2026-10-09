import {
  CpuIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  HomeIcon,
  LayersIcon,
  MailIcon,
  TargetIcon,
  TrophyIcon } from
'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navIcons: Record<string, LucideIcon> = {
  home: HomeIcon,
  focus: TargetIcon,
  capabilities: LayersIcon,
  projects: FolderOpenIcon,
  skills: CpuIcon,
  expertise: CpuIcon,
  achievements: TrophyIcon,
  education: GraduationCapIcon,
  contact: MailIcon
};