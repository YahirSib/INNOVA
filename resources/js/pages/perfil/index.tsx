import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Perfil',
        href: '/perfil',
    },
];

export default function Perfil() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Perfil" />
            
        </AppLayout>
    );
}
