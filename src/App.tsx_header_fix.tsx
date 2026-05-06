import React, { useState, useEffect, Component, ReactNode, useRef, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { supabase } from './supabase';
import SplashScreen from './components/SplashScreen';
import LoginPage from './components/LoginPage';
import { 
  User, Lock, Eye, EyeOff, ChevronRight, Package, LogOut, LayoutDashboard, 
  Truck, Settings, AlertCircle, CheckCircle2, Search, FileCode, RefreshCw, 
  Store, Layers, Bell, ChevronDown, FileText, BarChart3, AlertTriangle,
  PieChart, Database, Hash, FileWarning, Zap, ShoppingBag, GitBranch, UserCircle, Sliders,
  Copy, Check, Edit2, Trash2, XCircle, Plus, X, ShieldCheck, Info, Upload, Download,
  Shield, Key, Save, Mail, LayoutGrid, List, History, FileSpreadsheet, Building2, Barcode,
  Contact, Activity, Settings2, Building, Fingerprint
} from 'lucide-react';

// Mock User for local development
const mockUser = {
  uid: 'local-user-id',
  email: 'demo@example.com',
  displayName: 'Demo User',
  emailVerified: true,
  isAnonymous: false,
  providerData: []
};

import emailjs from 'emailjs-com';
