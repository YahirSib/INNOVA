import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Perfil',
        href: '/perfil',
    },
];

export default function Perfil() {

    const {data, setData, errors, post} = useForm({
        nombre: "",
        estado: ""
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('perfil.store'))
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Perfil" />
            <div className='gird grid-row-3 w-full h-full p-4'>
                <div className='grid grid-row-2 w-full rounded-lg mb-2'>
                    <h1 className='text-red-800 font-bold text-xl'>Mantenimiento de Perfiles</h1>
                    <h2 className='italic text-gray-700'>Gestion de perfiles dentro del sistema</h2>
                </div>
                <Accordion type="single" defaultValue ="item-1" collapsible className="w-full grid grid-row-2">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Creacion de Perfiles</AccordionTrigger>
                        <AccordionContent className='pt-2'>
                            <form onSubmit={submit} className='space-y-6'>
                                <div className=' grid gap-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 p-2 w-full rounded-lg mb-0'>
                                    <div className='grid grid-rows-3 grid-col-1'>
                                        <Label htmlFor="txtNombre">Nombre</Label>
                                        <Input 
                                            id='txtNombre'
                                            placeholder='Ingrese el nombre del perfil.'
                                            className='rounded-sm py-1 px-2 bg-neutral-100 border border-neutral-400' 
                                            value={data.nombre}
                                            onChange={(e) => setData('nombre', e.target.value)}
                                        />
                                        <InputError className="mt-2" message={errors.nombre}/>
                                    </div>
                                    <div className='grid grid-rows-3 grid-col-1'>
                                        <Label htmlFor="slcEstado">Estado</Label>
                                        <Select name='slcEstado'
                                        value={data.estado} 
                                        onValueChange={(value) => setData('estado', value)}>
                                            <SelectTrigger className="rounded-sm py-1 px-2 bg-neutral-100 border border-neutral-400">
                                                <SelectValue placeholder="Selecciona una opción" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="A">Activo</SelectItem>
                                                <SelectItem value="Z">Inactivo</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <InputError className="mt-2" message={errors.estado} />
                                    </div>
                                </div>
                                <div className='flex justify-center items-evenly'>
                                    <Button>Crear</Button>
                                </div>
                            </form>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </AppLayout>
    );
}
