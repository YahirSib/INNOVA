import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { NavPrincipal, type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, BoxesIcon, File, FileChartColumnIncreasingIcon, Folder, FolderIcon, Home, LayersIcon, LayoutGrid, ListIcon, Settings2Icon, SettingsIcon, SofaIcon, TagsIcon, UserIcon, UsersIcon, UserSquare2Icon } from 'lucide-react';
import AppLogo from './app-logo';

const mantenimientosItem: NavItem[] = [
    {
        title: 'Usuarios',
        href: '/users',
        icon: UserIcon
    },
    {
        title: 'Perfil',
        href: '/perfil',
        icon: ListIcon
    },
    {
        title: 'Piezas',
        href: '/piezas',
        icon: LayersIcon
    },
    {
        title: 'Salas',
        href: '/salas',
        icon: SofaIcon
    },
    {
        title: 'Carpinteros',
        href: '/carpinteros',
        icon: UsersIcon
    },
    {
        title: 'Tapiceros',
        href: '/tapiceros',
        icon: UserSquare2Icon
    }
];

const movimientosItem : NavItem[] = [
    {
        title: 'Nota de Pieza',
        href: '/nota-pieza',
        icon: File
    },
    {
        title: 'Agrupacion de Sala',
        href: '/agrupacion-sala',
        icon: BoxesIcon
    },
    {
        title: 'Traspaso de Sala',
        href: '/traspaso-sala',
        icon: TagsIcon
    },
    {
        title: 'Nota de Produccion',
        href: '/nota-produccion',
        icon: FolderIcon
    }
];

const menuPrin: NavPrincipal[] = [
    {
        title: 'Mantenimientos',
        icon: Settings2Icon,
        items: mantenimientosItem,
    },
    {
        title: 'Movimientos',
        icon: FileChartColumnIncreasingIcon,
        items: movimientosItem,
    }
];

const footerNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Home,
    }
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={menuPrin} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
