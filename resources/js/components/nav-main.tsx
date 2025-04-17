import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem , SidebarMenuSub, SidebarMenuSubItem} from '@/components/ui/sidebar';
import { NavPrincipal, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';

export function NavMain({ items = [] }: { items: NavPrincipal[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible className='group/collapsible'>
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {item.items.map((menu) => (
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton  
                                            asChild isActive={menu.href === page.url}
                                            tooltip={{ children: menu.title }}
                                        >
                                            <Link href={menu.href} prefetch>
                                                {menu.icon && <menu.icon />}
                                                <span>{menu.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
