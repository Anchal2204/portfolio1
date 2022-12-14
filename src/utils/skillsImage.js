//import adobxd from "../assets/svg/skill/adobe-xd.svg"
import adobeaudition from '../assets/svg/skill/adobeaudition.svg'
import afterEffects from '../assets/svg/skill/after-effects.svg'
import angular from '../assets/svg/skill/angular.svg'
//import aws from '../assets/svg/skill/aws.svg'
import bootstrap from '../assets/svg/skill/bootstrap.svg'
import bulma from '../assets/svg/skill/bulma.svg'
import c from '../assets/svg/skill/c.svg'
import capacitorjs from '../assets/svg/skill/capacitorjs.svg'
import coffeescript from '../assets/svg/skill/coffeescript.svg'
import cplusplus from '../assets/svg/skill/cplusplus.svg'
import csharp from '../assets/svg/skill/csharp.svg'
import css from '../assets/svg/skill/css.svg'
import dart from '../assets/svg/skill/dart.svg'
import deno from '../assets/svg/skill/deno.svg'
import django from '../assets/svg/skill/django.svg'
//import docker from '../assets/svg/skill/docker.svg'
import firebase from '../assets/svg/skill/firebase.svg'
import gcp from '../assets/svg/skill/gcp.svg'
import gimp from '../assets/svg/skill/gimp.svg'
import git from '../assets/svg/skill/git.svg'
import go from '../assets/svg/skill/go.svg'
import graphql from '../assets/svg/skill/graphql.svg'
import html from '../assets/svg/skill/html.svg'
import javascript from '../assets/svg/skill/javascript.svg'
import materialui from '../assets/svg/skill/materialui.svg'
import mongoDB from '../assets/svg/skill/mongoDB.svg'
import mysql from '../assets/svg/skill/mysql.svg'
import postgresql from '../assets/svg/skill/postgresql.svg'
import python from '../assets/svg/skill/python.svg'
import react from '../assets/svg/skill/react.svg'
//import azure from '../assets/svg/skill/azure.svg'
import blender from '../assets/svg/skill/blender.svg'
import fastify from '../assets/svg/skill/fastify.svg'
import figma from '../assets/svg/skill/figma.svg'
import flutter from '../assets/svg/skill/flutter.svg'
import microsoftoffice from '../assets/svg/skill/microsoftoffice.svg'
import github from '../assets/svg/skill/github.png'
import canva from '../assets/svg/skill/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'python':
            return python;
        case 'adobe audition':
            return adobeaudition;
        
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'materialui':
            return materialui;
        
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
            case 'github':
                return github; 
        
        default:
            break;
    }
}
export default skillsImage;