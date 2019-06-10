import {createSerializer} from 'jest-emotion'
import emotion from 'emotion'

expect.addSnapshotSerializer(createSerializer(emotion));
